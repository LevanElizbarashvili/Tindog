class Character {
  constructor(data) {
    Object.assign(this, data);
  }
    getbadgeHtml(){
          if(this.hasBeenSwiped === true){
            return `<img class="badge" src="images/badge-nope.png">`
          } else if(this.hasBeenLiked === true){
            return`<img class="badge" src="images/badge-like.png">`
          } else return " "
    }

    getDogHtml = () => {
      const { name, bio, age, hasBeenSwiped, hasBeenLiked } = this;
      const badge = this.getbadgeHtml()
      return `
          <div class="text img-properties ${name}">
          ${badge}
              <p class="name-age">
                  ${name}, ${age}
              </p>
              <p>
                  ${bio}
              </p>
          </div>`;
    };
  
}

export default Character;
