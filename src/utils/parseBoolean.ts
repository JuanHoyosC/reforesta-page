export const convertToBoolean = (sampleValue: any) => {
    switch (sampleValue) {
      case true:
        return true;
      case "true":
        return true;
      case 1:
        return true;
      case "1":
        return true;
      case "on":
        return true;
      case "yes":
        return true;
      default:
        return false;
    }
  };