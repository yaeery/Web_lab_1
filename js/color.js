let _Colors = [255];
let colInx = 0;
var _bool = false;
var body = document.querySelector('body');
for(var i =0; i<255;i++)
{
  _Colors[i] = 'rgb(255,0,' + i.toString()+')';
}
(function changeColor()
{
  if(colInx==254)
  {
    _bool = true;
  }
  if(colInx==0)
  {
    _bool=false;
  }
  if(_bool==false)
  {
    body.style.setProperty('--main-color',_Colors[(colInx++)%255]);
  }
  else
  {
    body.style.setProperty('--main-color',_Colors[(colInx--)%255]);
  }
setTimeout(changeColor, 0.01);
})();