var coverLetter = angular.module('coverLetter', []);

coverLetter.controller('mainCtrl', ['$scope',
  function($scope) {
    $scope.date = moment(Date.now()).format("MMMM DD, YYYY");

    $scope.contact_name = ""
    $scope.contact_title = ""
    $scope.position = "Software Engineer"
    $scope.company_name = "Company Name"
    $scope.company_space = "in the space"
    $scope.company_address = "Company Address"
    $scope.company_address_two = "San Francisco, CA 94103"

    // $scope.greeting = "Hello COMPANY team!"
    
    // $scope.intro = "I am a web developer with experience in Ruby on Rails, Javascript and Backbone.js. Trained as a research scientist, I first became interested in programming while working on computational research projects in fields ranging from solar seismology to computational biology. While teaching abroad, I began exploring the web and applying my computational skills to a wider range of problems. Most recently, I built an airbnb clone exclusively featuring tree houses called \"treebnb,\" and deployed a blogging platform built on a lightweight framework that I built, modeled after Ruby on Rails."
    
    $scope.middle = " is at the forefront of its industry, changing the way people "
    
    // $scope.end = "I've also attached my resume for your consideration. You can find my portfolio at www.jorgerafaelrodriguez.com, my Github at github.com/jorgerro, and my LinkedIn profile at linkedin.com/in/jorgerro. Thank you for your time and consideration, and I hope to hear back from you soon."
  }])