const rootRef = firebase.database().ref();
const questionsRef = rootRef.child("questions");

document.getElementById("btnsubmit").addEventListener("click", function () {
    let qid = document.getElementById('quesid').value.trim();
    let cat = document.getElementById('category').value.trim();
    let qKey = cat+qid.replace('.','');
    let newQuesRef = questionsRef.child(qKey);

    newQuesRef.set({
        category: cat,
        quesid: qid,
        ques: document.getElementById("ques").value.trim(),
        desc: document.getElementById("desc").value.replace(/\n/g, "<br>").trim(),
        soln: document.getElementById("soln").value.trim(),
        when: firebase.database.ServerValue.TIMESTAMP
    });
});
