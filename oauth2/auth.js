function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)
 
  fullName.textContent = data.name
  sub.textContent = data.sub
  given_name.textContent = data.given_name
  family_name.textContent = data.family_name
  email.textContent = data.email
  picture.setAttribute('src',data.picture)
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "1058824386616-77sspsgglp4nasdj3kaga902q9ctnah6.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  
  );
  google.accounts.id.prompt(); 
}
