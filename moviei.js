 Vue.component('moviedetails',{
      props:['movie'],
      template:`
           <div>
           <div class="card" style="width: 18rem;">
            <img class="card-img-top" v-bind:src="movie.Poster" alt="Card image cap">
            <div class="card-body">
             <h5 class="card-title"><b>{{movie.Title }}</b></h5>
             <p class="card-text"></p>
             <a href="#modal_one" class="btn btn-primary" data-toggle="modal" data.target="modal_one">Descript </a>
            </div>
            <div  id="modal_one" class="modal" tabindex="-1" role="dialog">
            <div id="modal_two" class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title"><b>{{movie.Title}}</b></h5>
                  <b> <p>Year:{{movie.Year}},Id:{{movie.imdbID}}</p></b>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                
                 
                <div class="modal-footer">
                
                
                  <button id="close_button" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
           
          </div>


</div>
           </div> `  
     });

  new Vue({
      el: "#mymovieapp",
      data:{
        
          
      searchKey:'',
      Mlist:[] 
      
    

      },
      
      
   
      methods:{
        searchMovie()
        {
          var url='http://www.omdbapi.com/?s='+this.searchKey+'&apikey=e0620bd4';
          fetch(url) 
         
      .then(response=>response.json())
      .then(data=>{this.Mlist = data ;
      })

        }
    
      
  }
    })