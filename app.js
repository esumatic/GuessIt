document.getElementById('keyBtn').onclick=()=>{
  const key=document.getElementById('keyInput').value.trim();
  if(!key)return alert('Key fehlt');
  document.getElementById('modal').classList.add('hidden');
  document.getElementById('game').classList.remove('hidden');
  const s=document.createElement('script');
  s.src=`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
  s.async=true;
  document.body.appendChild(s);
};

window.initMap=()=>{
  new google.maps.Map(document.getElementById('map'),{
    center:{lat:0,lng:0},zoom:2
  });
};
