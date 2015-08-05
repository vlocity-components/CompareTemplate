"use strict";

/* Controllers */

var bpModule = angular.module("compare", ['ui.bootstrap']);

bpModule.controller("compareController", function($scope, $modal, $log) {
    $scope.productsJSON = {
        "recSet": [{
            "attributes": [{
                "categoryName": "Deductible",
                "value": "4000",
                "dataType": "Currency",
                "name": "Annual Deductible"
            }, {
                "categoryName": "Deductible",
                "value": "medical deductible",
                "dataType": "Text",
                "name": "Prescription Drug Deductible"
            }, {
                "categoryName": "Preventive Care",
                "value": "30",
                "dataType": "Currency",
                "name": "Primary Care Office Visit"
            }, {
                "categoryName": "Preventive Care",
                "value": "40",
                "dataType": "Currency",
                "name": "Speciality Office Visit"
            }, {
                "categoryName": "Preventive Care",
                "value": "45",
                "dataType": "Currency",
                "name": "Non-Physican Office Visit"
            }, {
                "categoryName": "Preventive Care",
                "value": "45",
                "dataType": "Currency",
                "name": "Another Name"
            }],
            "NumDays": "1",
            "ProductName": "HMO 200",
            "ProductRecommend": "true",
            "ProductCode": "TI-AI",
            "NumChildren": "2",
            "NumAdults": "2",
            "TotalPrice": "26.8",
            "ChildPrice": "3.4",
            "AdultPrice": "7.5",
            "ID": "0"
        }, {
            "attributes": [{
                "categoryName": "Deductible",
                "value": "5000",
                "dataType": "Currency",
                "name": "Annual Deductible"
            }, {
                "categoryName": "Deductible",
                "value": "medical deductible",
                "dataType": "Text",
                "name": "Prescription Drug Deductible"
            }, {
                "categoryName": "Deductible",
                "value": "medical deductible",
                "dataType": "Text",
                "name": "Another Type of Deductible"
            }, {
                "categoryName": "Preventive Care",
                "value": "30",
                "dataType": "Currency",
                "name": "Primary Care Office Visit"
            }, {
                "categoryName": "Preventive Care",
                "value": "40",
                "dataType": "Currency",
                "name": "Speciality Office Visit"
            }, {
                "categoryName": "Preventive Care",
                "value": "45",
                "dataType": "Currency",
                "name": "Non-Physican Office Visit"
            }],
            "NumDays": "1",
            "ProductName": "HMO 250",
            "ProductRecommend": "false",
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
                "name": "Annual Deductible"
            }, {
                "categoryName": "Deductible",
                "value": "medical deductible",
                "dataType": "Text",
                "name": "Prescription Drug Deductible"
            }, {
                "categoryName": "Preventive Care",
                "value": "30",
                "dataType": "Percent",
                "name": "Primary Care Office Visit"
            }, {
                "categoryName": "Preventive Care",
                "value": "40",
                "dataType": "Percent",
                "name": "Speciality Office Visit"
            }, {
                "categoryName": "Preventive Care",
                "value": "45",
                "dataType": "Percent",
                "name": "Non-Physican Office Visit"
            }],
            "NumDays": "1",
            "ProductName": "HMO 500",
            "ProductRecommend": "false",
            "ProductCode": "TI-NE",
            "NumChildren": "2",
            "NumAdults": "2",
            "TotalPrice": "10.1",
            "ChildPrice": "0.8",
            "AdultPrice": "1.75",
            "ID": "2"
        }],
        "error": "OK",
        "currencySymbol": "€"
    };

    $scope.open = function(size) {

        var modalInstance = $modal.open({
            templateUrl: 'vlcCompareModal.html',
            controller: 'CompareModalCtrl',
            size: size,
            resolve: {
                content: function() {
                    return $scope.productsJSON;
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

bpModule.controller('CompareModalCtrl', function($scope, $modalInstance, content) {
    $scope.categoryList = [];
    $scope.categoryMap = {};
    $scope.productList = [];
    $scope.currencySymbol = content.currencySymbol;

    $scope.attributesValueForProduct = function(productCode, categoryCode, attributeName) {
        return $scope.categoryMap[categoryCode]['attributes'][attributeName]['assignmentValues'][productCode];
    }

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
    }

    $scope.showCategory = function(category) {
        return ($scope.filteredCategory == null || category == $scope.filteredCategory);
    }

    $scope.selectedItemChanged = function(code) {
        $scope.filteredCategory = code;
    }

    $scope.transformData();

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});
