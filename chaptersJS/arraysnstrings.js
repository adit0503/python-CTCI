function showQuestions(){
  let show = document.getElementById("arraysnstrings");
  let qRef = firebase.database().ref('questions/').orderByChild('category').equalTo('AS');

  qRef.once('value', function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
          let childKey = childSnapshot.key;
          let childData = childSnapshot.val();
            let quesid = childData.quesid;
            let ques = childData.ques;
            let desc = childData.desc
            let soln = childData.soln;
          show.innerHTML += "<div class='w3-row w3-margin'> <div class='w3-container'> <h3>" + quesid + " " + ques + "</h3> <p>" + desc + "</p> <p> <a class='btn btn-primary' data-toggle='collapse' href='#" + childKey + "' role='button' aria-expanded='false'> Solution </a> </p> <div class='collapse' id='" + childKey + "'> <div class='card card-body'> <pre class='w3-code notranslate pythonHigh'>" + soln + "</pre> </div> </div> </div> </div> </div>";
          // show.innerHTML += "<div class='w3-row w3-margin'> <div class='w3-container'> <h3>" + quesid + " " + ques + "</h3> <p>" + desc + "</p> <p> <a class='btn btn-primary' data-toggle='collapse' onclick='displaySolution(\"" + childKey + "\"); this.onclick=null;' href='#" + childKey + "' role='button' aria-expanded='false' > Solution </a> </p> <div class='collapse' id='" + childKey + "'> </div> </div> </div> </div>";
            })
        })
}
showQuestions();
