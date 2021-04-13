$(document).ready(function() {
    // translation vars/arrays
    var hostlist_text = "";

    
    if (lng_code != null) {
        if(i18n[lng_code]) {
            hostlist_text = i18n[lng_code];
        } else {
            hostlist_text = i18n["default"];
        }
    } else {
        hostlist_text = i18n["default"];
    }
    
    // appends switch input below host list
    var enterHostSwitch = `'
    <tr class="form-group row">
      <td class="input input-group input-group-lg">
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="other" name="other" value="other" >
          <label class="custom-control-label" for="other">${hostlist_text}</label>
        </div>
      </td>
    </tr>'`
  
    var initialOtherhost = `<input type="text" id="rcmloginhost" class="form-control" name="_host" placeholder="tls://imap.yourhost.com" />`
  
    // Adding a checkbox to switch host select to input box
    $('td.input>select#rcmloginhost').parent().parent().after(enterHostSwitch);
    // when checked switch dropdown with input field for 
    $('#other').bind('click', function() {
        // is the checkbox checked?
        if($('#other').is(':checked')) {
            // lets save our original html
            originalHTML = $('td.input>select#rcmloginhost');
            $('td.input>select#rcmloginhost').replaceWith(initialOtherhost);
        }else{
            // let's revert our changes ... Bazinga!
            $('td.input>input#rcmloginhost').replaceWith(originalHTML);
        }
    });
});
