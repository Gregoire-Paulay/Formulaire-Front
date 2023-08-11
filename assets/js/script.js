document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM chargé");

  // -- Détecter un click n'importe où sur la page
  //   document.addEventListener("click", () => {
  //     console.log("clicked");
  //   });

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    // console.log("submit", event);

    // const firstname = document.querySelector("#firstname").value;
    // const lastname = document.querySelector("#lastname").value;
    // const email = document.querySelector("#email").value;
    // const sujet = document.querySelector("#sujet").value;
    // const message = document.querySelector("#message").value;

    // console.log({
    //   firstname,
    //   lastname,
    //   email,
    //   sujet,
    //   message,
    // });

    const { data } = await axios.post("http://localhost:3000/form", {
      firstname,
      lastname,
      email,
      sujet,
      message,
    });

    console.log("response>>", data);
  });
});
