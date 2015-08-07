"use strict";

/* Controllers */

var bpModule = angular.module("compare", ['ui.bootstrap']);

bpModule.controller("compareController", function($scope, $modal, $log) {
    $scope.control = {
        "vlcSI": {
            "recSet": [{
                "attributes": [{
                    "categoryName": "Deductible",
                    "value": "4000",
                    "dataType": "Currency",
                    "name": "Annual Deductible",
                    "description": "Key"
                }, {
                    "categoryName": "Deductible",
                    "value": "medical deductible",
                    "dataType": "Text",
                    "name": "Prescription Drug Deductible",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "30",
                    "dataType": "Percent",
                    "name": "Primary Care Office Visit",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "40",
                    "dataType": "Currency",
                    "name": "Speciality Office Visit",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "45",
                    "dataType": "Currency",
                    "name": "Non-Physican Office Visit",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "45",
                    "dataType": "Currency",
                    "name": "Another Name"
                }],
                "NumDays": "1",
                "ProductName": "Tiered Copayment HMO 200",
                "ProductRecommend": false,
                "ProductCode": "TI-AI",
                "NumChildren": "2",
                "NumAdults": "2",
                "TotalPrice": "26.8",
                "ChildPrice": "3.4",
                "AdultPrice": "7.5",
                "ID": "0",
                "vlcSelected": true
            }, {
                "attributes": [{
                    "categoryName": "Deductible",
                    "value": "5000",
                    "dataType": "Currency",
                    "name": "Annual Deductible",
                    "description": "Key"
                }, {
                    "categoryName": "Deductible",
                    "value": "medical deductible",
                    "dataType": "Text",
                    "name": "Prescription Drug Deductible",
                    "description": "Key"
                }, {
                    "categoryName": "Deductible",
                    "value": "medical deductible",
                    "dataType": "Text",
                    "name": "Another Type of Deductible",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "30",
                    "dataType": "Currency",
                    "name": "Primary Care Office Visit",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "40",
                    "dataType": "Currency",
                    "name": "Speciality Office Visit",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "45",
                    "dataType": "Currency",
                    "name": "Non-Physican Office Visit"
                }],
                "NumDays": "1",
                "ProductName": "Tiered Copayment HMO 250",
                "ProductRecommend": true,
                "ProductCode": "TI-EM",
                "NumChildren": "2",
                "NumAdults": "2",
                "TotalPrice": "12.9",
                "ChildPrice": "1.2",
                "AdultPrice": "2.75",
                "ID": "1"
            }, {
                "attributes": [{
                    "categoryName": "Deductible",
                    "value": "6000",
                    "dataType": "Currency",
                    "name": "Annual Deductible",
                    "description": "Key"
                }, {
                    "categoryName": "Deductible",
                    "value": "medical deductible",
                    "dataType": "Text",
                    "name": "Prescription Drug Deductible",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "30",
                    "dataType": "Percent",
                    "name": "Primary Care Office Visit",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "40",
                    "dataType": "Percent",
                    "name": "Speciality Office Visit",
                    "description": "Key"
                }, {
                    "categoryName": "Preventive Care",
                    "value": "45",
                    "dataType": "Percent",
                    "name": "Non-Physican Office Visit"
                }],
                "NumDays": "1",
                "ProductName": "Tiered Copayment HMO 500",
                "ProductRecommend": false,
                "ProductCode": "TI-NE",
                "NumChildren": "2",
                "NumAdults": "2",
                "TotalPrice": "10.1",
                "ChildPrice": "0.8",
                "AdultPrice": "1.75",
                "ID": "2"
            }, {
                "attributes": [{
                    "categoryName": "Deductible",
                    "dataType": "Percent",
                    "name": "In Network",
                    "value": "50"
                }, {
                    "categoryName": "Deductible",
                    "dataType": "Percent",
                    "name": "In Network",
                    "value": "50"
                }, {
                    "categoryName": "Deductible",
                    "dataType": "Currency",
                    "name": "In Network Individual",
                    "value": "60"
                }, {
                    "categoryName": "Deductible",
                    "dataType": "Currency",
                    "name": "Out of Network",
                    "value": "30"
                }, {
                    "categoryName": "Features",
                    "dataType": "Currency",
                    "name": "Baggage Loss, Delay & Damage",
                    "value": "40"
                }, {
                    "categoryName": "Features",
                    "dataType": "Text",
                    "name": "Emergency Medical",
                    "value": "Included",
                    "description": "Monkey"
                }, {
                    "categoryName": "Features",
                    "dataType": "Text",
                    "name": "Flight & Travel Accident",
                    "value": "Included"
                }, {
                    "categoryName": "Features",
                    "dataType": "Text",
                    "name": "Trip Cancellation & Interruption",
                    "value": "Not Included"
                }],
                "AdultPrice": 1.75,
                "ChildPrice": 0.8,
                "ID": "0",
                "NumAdults": 2,
                "NumChildren": 2,
                "NumDays": 1,
                "ProductCode": "TI-NE",
                "ProductName": "Non-Emergency Medical",
                "TotalPrice": 10.1
            }],
            "error": "OK",
            "currencyCode": "GBP"
        }
    };
    $scope.currencySymbol = "";
    $scope.currencyCode = $scope.control.vlcSI.currencyCode;
    $scope.currencyMap = [
        {"USD": "$"},
        {"CAD": "$"},
        {"EUR": "€"},
        {"GBP": "£"},
        {"JPY": "¥"},
        {"KRW": "₩"},
        {"CNY": "元"}
    ];

    $scope.getCurrencySymbol = function(code) {
        var currencySymbol = "";
        $scope.currencyMap.forEach(function(item) {
            if(item[code] !== undefined) {
                currencySymbol = item[code];
            }
        });
        return currencySymbol;
    };
    $scope.currencySymbol = $scope.getCurrencySymbol($scope.currencyCode);

    $scope.open = function(size) {

        var modalInstance = $modal.open({
            templateUrl: 'vlcCompareModal.html',
            controller: 'CompareModalCtrl',
            size: size,
            resolve: {
                content: function() {
                    return $scope.control.vlcSI;
                },
                currencySymbol: function() {
                    return $scope.currencySymbol;
                },
                currencyCode: function() {
                    return $scope.currencyCode;
                }
            }
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;            
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

bpModule.controller('CompareModalCtrl', function($scope, $modalInstance, content, currencySymbol, currencyCode) {
    $scope.categoryList = [];
    $scope.categoryMap = {};
    $scope.productList = []; 
    $scope.currencySymbol = currencySymbol;
    $scope.currencyCode = currencyCode;

    $scope.attributesValueForProduct = function(productCode, categoryCode, attributeName) {
        return $scope.categoryMap[categoryCode]['attributes'][attributeName]['assignmentValues'][productCode];
    };

    $scope.transformData = function() {
        var products = content['recSet'];
        for (var i = 0; i < products.length; i++) {
            var productAttributes = products[i];
            var product = {};
            product['name'] = productAttributes['ProductName'];
            product['code'] = productAttributes['ProductCode'];

            $scope.productList.push(product);
            var attributes = productAttributes['attributes'];
            for (var j = 0; j < attributes.length; j++) {
                var attributeAssignment = attributes[j];
                var categoryName = attributeAssignment['categoryName'];
                var attributeName = attributeAssignment['name'];
                var attributeValue = attributeAssignment['value'];
                var attributeDataType = attributeAssignment['dataType'];

                if ($scope.categoryMap[categoryName] == null) {
                    $scope.categoryList.push(categoryName);
                    var attributeMap = {};
                    var productAssignmentMap = {};
                    productAssignmentMap[product['code']] = {"value": attributeValue, "dataType": attributeDataType};
                    attributeMap['assignmentValues'] = productAssignmentMap;
                    attributeMap['name'] = attributeName;
                    $scope.categoryMap[categoryName] = {};
                    $scope.categoryMap[categoryName]['attributes'] = {};
                    $scope.categoryMap[categoryName]['attributes'][attributeName] = attributeMap;
                } else {
                    var attributeMap = $scope.categoryMap[categoryName]['attributes'][attributeName];
                    if (attributeMap != null) {
                        var productAssignmentMap = attributeMap['assignmentValues'];
                        productAssignmentMap[product['code']] = {"value": attributeValue, "dataType": attributeDataType};
                    } else {
                        attributeMap = {};
                        var productAssignmentMap = {};
                        productAssignmentMap[product['code']] = {"value": attributeValue, "dataType": attributeDataType};
                        attributeMap['assignmentValues'] = productAssignmentMap;
                        attributeMap['name'] = attributeName;
                        $scope.categoryMap[categoryName]['attributes'][attributeName] = attributeMap;
                    }
                }
            }
        }
    };

    $scope.showCategory = function(category) {
        return ($scope.filteredCategory == null || category == $scope.filteredCategory);
    };

    $scope.selectedItemChanged = function(code) {
        $scope.filteredCategory = code;
    };

    $scope.transformData();

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});
