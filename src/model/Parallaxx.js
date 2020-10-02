class Parallaxx extends Element {
    constructor(posX,posY){
        super(posX,posY);
     }
     _pintar(img, _posX, _posY){
        imageMode(CENTER);
        image(img, this._posX, this._posY);
    }
}