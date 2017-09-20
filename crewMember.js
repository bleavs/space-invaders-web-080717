class CrewMember {
  constructor(position) {

    this.position =  position;
    this.currentShip = "Looking for a Rig";

  }


  chargePhasers() {
    return this.position === "Gunner" && this.currentShip !== "Looking for a Rig" ? this.currentShip.phasersCharge = "charged!" : "had no effect";
  }

    engageWarpDrive() {
      return this.position === "Pilot" && this.currentShip !== "Looking for a Rig" ? this.currentShip.warpDrive = "engaged!" : "had no effect";
    }

    setsInvisibility() {
        return this.position === "Defender" && this.currentShip !== "Looking for a Rig" ? this.currentShip.cloaked = true : "had no effect";
    }



}
