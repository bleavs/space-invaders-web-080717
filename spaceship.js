class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name =  name;


    this.phasers = phasers;
    this.shields = shields;

    this.cloaked = false;

    this.warpDrive = "disengaged";

    this.docked = crew.length > 0 ? false : true;

    this.crew = this.recruit(crew);

    this.phasersCharge = "uncharged";

  }

  recruit(crew) {
    console.log(this);
    crew.forEach(crewMember => crewMember.currentShip = this);
    return crew;
  }


}
