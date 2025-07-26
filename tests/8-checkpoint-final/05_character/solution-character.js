/* eslint-disable no-unused-vars, no-prototype-builtins */
class Character{
    constructor(character, fontName, fontSize){
        this.character = character;
        this.fontName = fontName;
        this.fontSize = fontSize;
    }

    drawCharacter(){
        return this.character;
    }
}