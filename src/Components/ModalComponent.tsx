import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { NotesStore as Store } from "../Store/NotesStore";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalComponent = ({
  show,
  showOff,
  note,
  durum,
}: {
  show: boolean;
  showOff: () => void;
  note?: { id: string; title: string; contents: string };
  durum: "duzenle" | "ekle" | "goruntule";
}) => {
  const [title, setTitle] = React.useState<string>("");
  const [contents, setContents] = React.useState<string>("");
  return show ? (
    <Modal
      open={true}
      onClose={showOff}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <Box sx={style}>
          <TextField
            disabled={durum === "goruntule" ? true : false}
            id="outlined-multiline-flexible"
            label="Not Başlığı"
            multiline
            maxRows={4}
            defaultValue={note ? note.title : ""}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            disabled={durum === "goruntule" ? true : false}
            id="outlined-multiline-static"
            label="Not İçeriği"
            placeholder="Not İçeriği"
            defaultValue={note ? note.contents : ""}
            multiline
            onChange={(e) => {
              setContents(e.target.value);
            }}
            rows={4}
          />
          <div>
            {durum === "goruntule" ? (
              <></>
            ) : (
              <Button
                color="secondary"
                variant="contained"
                size="small"
                startIcon={<SaveAsIcon />}
                onClick={async function () {
                  if (durum === "ekle") {
                    await Store.NotEkle({ title: title, contents: contents });
                    showOff();
                  } else if (durum === "duzenle") {
                    await Store.NotDuzenle({
                      id: note ? note.id : "",
                      title: title,
                      contents: contents,
                    });
                    showOff();
                  }
                }}
              >
                {durum === "duzenle" ? "Düzenle" : "Ekle"}
              </Button>
            )}
          </div>
        </Box>
      </>
    </Modal>
  ) : (
    <></>
  );
};
export default ModalComponent;
