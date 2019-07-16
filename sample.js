$(document).ready(function () {
  function score_indicate() {
    // By making such a description, in the variable called subject_points
    // You can create an array of [language score, English score, math score, science score, society score].
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];

    // Furthermore, by making such a description, the total point is output to the right part: "total point:"
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    $("#sum_indicate").text(sum);

    let pointaverage = sum / 5;
    $('#avarage_indicate').text(pointaverage);

    var all = {
      subject_points,
      sum
    };
    return all;
    // write the process to output the average point referring to the above here
  };

  function get_achievement() {
    // Write a process to output a string of rank values ("A" if the average score is 80 or more, "B" if it is 60 or more, "C" if it is 40 or more, "D" if it is less than 40)
    var allreturns = score_indicate();
    var sum = allreturns.sum;
    let percentage = (sum * 100) / 500;
    if (percentage >= 80) {
      return "A";
    }
    else if (percentage >= 60) {
      return "B";
    }
    else if (percentage >= 40) {
      return "C";
    }
    else {
      return "D";
    }
  }

  function get_pass_or_failure() {
    // write a process of giving a character string "pass" if all subjects have 60 or more points, and a character string of "fail" if there is at least one subject with less than 60 points.
    var allreturns = score_indicate();
    var subject_points = allreturns.subject_points;
    console.log(subject_points);
    let judge;
    number = subject_points.find(element => {
      return element < 60;
    });
    if (number == undefined) {
      judge = "Passed";
    }
    else {
      judge = "Failed";
    }
    return judge;

  }

  function judgement() {
    var achievement = get_achievement();
    var passOrFail = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement}. ${passOrFail}</label>`);


  };

  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });

  $('#btn-evaluation').click(function () {

    var achievement = get_achievement();
    $('#evaluation').text(achievement);
  });

  $('#btn-judge').click(function () {
    var judge = get_pass_or_failure();

    $('#judge').text(judge);
  });

  $('#btn-declaration').click(function () {
    $('#declaration').text("");
    judgement();

  });
});

