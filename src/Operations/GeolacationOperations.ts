import { Geolocation } from "@capacitor/geolocation";

export class GeolocationOperations {
  public static CurrentPosition = async () => {
    try {
      const position = await Geolocation.getCurrentPosition();
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
      console.log("Accuracy:", position.coords.accuracy);
      return position;
    } catch (error) {
      console.error("Error getting current position:", error);
    }
  };

  public static async CheckLocationPermissions() {
    const result = await Geolocation.checkPermissions();
    if (result.location === "granted") {
      console.log("Location access granted.");
    } else if (result.location === "denied") {
      console.log("Location access permission denied.");
    } else if (result.location === "prompt") {
      console.log(
        "Location access permission has not been granted yet, the user will be prompted."
      );
    } else if (result.location === "prompt-with-rationale") {
      console.log("Location access permission unknown.");
    }
  }
}
