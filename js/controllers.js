"use strict";

/* Controllers */

var policyCards = angular.module("hpCompare", ['ui.bootstrap','angular.filter']);

policyCards.controller("hpCompareController", function($scope) {
    $scope.products = {
        "TFDRresp": {
            "output": [{
                "attributes": [{
                    "categoryName": "Deductible",
                    "value": "4000",
                    "name": "Annual Deductible"
                }, {
                    "categoryName": "Deductible",
                    "value": "medical deductible",
                    "name": "Prescription Drug Deductible"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "30",
                    "name": "Primary Care Office Visit"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "40",
                    "name": "Speciality Office Visit"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "45",
                    "name": "Non-Physican Office Visit"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "45",
                    "name": "Another Name"
                }, ],
                "NumDays": 1,
                "ProductName": "HMO 200",
                "ProductRecommend": true,
                "ProductCode": "TI-AI",
                "NumChildren": 2,
                "NumAdults": 2,
                "TotalPrice": 26.8,
                "ChildPrice": 3.4,
                "AdultPrice": 7.5,
                "ID": "0"
            }, {
                "attributes": [{
                    "categoryName": "Deductible",
                    "value": "5000",
                    "name": "Annual Deductible"
                }, {
                    "categoryName": "Deductible",
                    "value": "medical deductible",
                    "name": "Prescription Drug Deductible"
                }, {
                    "categoryName": "Deductible",
                    "value": "medical deductible",
                    "name": "Another Type of Deductible"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "30",
                    "name": "Primary Care Office Visit"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "40",
                    "name": "Speciality Office Visit"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "45",
                    "name": "Non-Physican Office Visit"
                }, ],
                "NumDays": 1,
                "ProductName": "HMO 250",
                "ProductRecommend": false,
                "ProductCode": "TI-EM",
                "NumChildren": 2,
                "NumAdults": 2,
                "TotalPrice": 12.9,
                "ChildPrice": 1.2,
                "AdultPrice": 2.75,
                "ID": "1"
            }, {
                "attributes": [{
                    "categoryName": "Deductible",
                    "value": "6000",
                    "name": "Annual Deductible"
                }, {
                    "categoryName": "Deductible",
                    "value": "medical deductible",
                    "name": "Prescription Drug Deductible"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "30",
                    "name": "Primary Care Office Visit"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "40",
                    "name": "Speciality Office Visit"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "45",
                    "name": "Non-Physican Office Visit"
                }, ],
                "NumDays": 1,
                "ProductName": "HMO 500",
                "ProductRecommend": false,
                "ProductCode": "TI-NE",
                "NumChildren": 2,
                "NumAdults": 2,
                "TotalPrice": 10.1,
                "ChildPrice": 0.8,
                "AdultPrice": 1.75,
                "ID": "2"
            }, ]
        },
        "error": "OK"
    }
});
