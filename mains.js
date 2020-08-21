function initMap(){
    const ubicacion =new Localizacion(()=>{
    
        const options={
         center:{
             latitude:ubicacion.latitude,
             longitude:ubicacion.longitud
         },
         
            zoom:14
        }
        var map=document.getElementById('map');
        const mapa=new google.maps.Map(map,options);
        
    });    

    }