var petsPageBuilderService = (function ($, petsService) {
  'use strict';

  return {
    buildPage: function () {
      petsService.getAll().then(function (petsData) {
        for (var i =0; i < petsData.length; i++) {
          var petString=`
            <div class="box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img src="assets/images/dogIcon.png" alt="Image">
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>${petsData[i].name}</strong>
                      <small>${petsData[i].about}</small>
                      <small>${petsData[i].breed}</small>
                      <small>${petsData[i].owner}</small>
                      <small>${petsData[i].type}</small>                        
                    </p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a class="level-item" aria-label="info">
                        <span class="icon has-text-primary">
                          <i class="fas fa-info-circle"></i>
                        </span>
                      </a>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          `;
            
          $(".column").append(petString);
        }
      });
    }
  };
})($, petsService);