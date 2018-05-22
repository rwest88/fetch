var peoplePageBuilderService = (function ($, peopleService) {
  'use strict';
  
  return {
    buildPage: function () {
      peopleService.getAll().then(function (peopleData) {
        for (var i =0; i < peopleData.length; i++) {
          var peopleString = `
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
                      <strong>${peopleData[i].firstname} ${peopleData[i].lastname}</strong>
                      <small>${peopleData[i].email}</small>
                      <small>${peopleData[i].about}</small>
                    </p>
                  </div>
                  <div class="is-pulled-right">
                    <a class="button hvr-box-shadow-outset" href="/profile/user/${peopleData[i].id}">View Profile</a>
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
          $(".column").append(peopleString);
        }
      });
    }
  };
})($, peopleService);