/**
  * This file has the smoothy scroll plugin source code. This is free to be distributed.
  * If you are seeing this message and using this plugin, I'd really appreciate your support
  * @ https://github.com/sricharankrishnan/no-fuss-smooth-scroll-jquery-plugin with a Github Star!
  *
  * Happy Coding and have a nice day.
  */

function makeItRealSmooth(element, duration, offset, callback) {
  try {
    if (element[0].nodeType !== 1) {
      throw new Error("- mandatory parameter 'element' to be of HTML Element Node Type");
    }
    var t = (!!duration && typeof duration === "number" && duration > 0) ? duration : 450;
    var diff = (!!offset && typeof offset === "number") ? offset : 0;
    
    /* register the click event */
    element.on("click", smoothyClickHandler);

    /* smoothy handler */
    function smoothyClickHandler(event) {
      try {
        event.preventDefault();
        var targetId = $(this).attr("data-smoothytarget");
        
        if (!targetId) {
          throw new Error(" - please place a target id value in the data attribute 'data-smoothytarget' for this to work.");
        }

        var targetElement = $(targetId);
        $("html").stop().animate({scrollTop: targetElement.offset().top - diff}, t, function() {
          if (typeof callback === "function") {
            callback();
          }
        });
        return false;
      }
      catch (err) {
        console.error("::: Make It Real Smooth Error :::");
        console.error(err);
        console.error("::: -------------------------------------------------------------------- :::");
      }
    }
  }
  catch (err) {
    console.error("::: Make It Real Smooth Error :::");
    console.error(err);
    console.error("::: -------------------------------------------------------------------- :::");
  }
}
