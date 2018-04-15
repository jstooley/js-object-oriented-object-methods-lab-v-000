function BoardMember (name, homeState, training) {
    this.name = name
    this.homestate = homeState
    this.training = training
    this.veto = function () {
      console.log("No, I must disagree")
    }
    this.approve = function () {
      console.log("You can do that!")
    }
}
