$(document).ready(() => {
  
  // Instantiate new list
  let imageGallery = new List();

  // Handle image submissions to data store
  $('#imgSubmit').on('click', function(){
    if (imageGallery.length() === 0) {
      let image = $('#imgInput').val();
      imageGallery.append(image);
      $('#imageWheel').attr('src', imageGallery.getElement());
      $('#imgInput').val('');
    } else {
      let image = $('#imgInput').val();
      imageGallery.append(image);
      imageGallery.next();
      $('#imageWheel').attr('src', imageGallery.getElement());
      $('#imgInput').val('');
    }
  });

  // Go to next image in data store
  $('#nextImg').on('click', function(){
    imageGallery.next();
    $('#imageWheel').attr('src', imageGallery.getElement());
  });

  // Go to previous image in data store
  $('#prevImg').on('click', function(){
    imageGallery.prev();
    $('#imageWheel').attr('src', imageGallery.getElement());
  });

  // Go to first image in data store
  $('#firstImg').on('click', function(){
    imageGallery.front();
    $('#imageWheel').attr('src', imageGallery.getElement());
  });

  // Go to next image in data store
  $('#lastImg').on('click', function(){
    imageGallery.end();
    $('#imageWheel').attr('src', imageGallery.getElement());
  });

  // Remove image from data store
  $('#deleteImg').on('click', function(){
    let imageToRemove = imageGallery.getElement();
    imageGallery.remove(imageToRemove);
    if (imageGallery.length() == 0) {
      $('#imageWheel').attr('src', '');
    } else {
      imageGallery.prev();
      $('#imageWheel').attr('src', imageGallery.getElement());
    }
  });

});
