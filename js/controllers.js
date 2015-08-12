"use strict";

/* Controllers */

var bpModule = angular.module("compare", ['ui.bootstrap']);

bpModule.directive('equalizeHeight', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        controller: function($scope) {
            //console.log('equalizeHeightFor - controller');
            var elements = [];
            this.addElement = function(element) {
                //console.log('adding element:', element);
                elements.push(element);
                //console.log(elements);
            }

            // resize elements once the last element is found
            this.resize = function() {
                $timeout(function() {
                    //console.log('finding the tallest ...');
                    // find the tallest
                    var tallest = 0,
                        height;
                    angular.forEach(elements, function(el) {
                        height = el[0].offsetHeight;
                        //console.log('height:', height);
                        if (height > tallest)
                            tallest = height;
                    });
                    //console.log('tallest:', tallest);
                    //console.log('resizing ...');
                    // resize
                    angular.forEach(elements, function(el) {
                        el[0].style.height = tallest + 'px';
                    });
                    //console.log('-- finished --');
                }, 0);
            };
        }
    };
}]);

bpModule.directive('equalizeHeightAdd', [function($timeout) {
    return {
        restrict: 'A',
        require: '^^equalizeHeight',
        link: function(scope, element, attrs, ctrl_for) {
            //console.log('equalizeHeightAdd - link');
            // add element to list of elements
            ctrl_for.addElement(element);
            if (scope.$last)
                ctrl_for.resize();
        }
    };
}]);

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
                "vlcSelected": true,
                "ProductType": "Medical",
                "ProductSubType": "HMO",
                "MarketSegment": "North"
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
                "ID": "1",
                "ProductType": "Medical",
                "ProductSubType": "HMO",
                "MarketSegment": "South"
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
                "ProductCode": "TI-SE",
                "NumChildren": "2",
                "NumAdults": "2",
                "TotalPrice": "10.1",
                "ChildPrice": "0.8",
                "AdultPrice": "1.75",
                "ID": "2",
                "ProductType": "Medical",
                "ProductSubType": "HMO",
                "MarketSegment": "East"
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
                    "description": "Key"
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
                "ID": "3",
                "NumAdults": 2,
                "NumChildren": 2,
                "NumDays": 1,
                "ProductCode": "TI-NE",
                "ProductName": "Non-Emergency Medical",
                "TotalPrice": 10.1,
                "ProductType": "Medical",
                "ProductSubType": "PPO",
                "MarketSegment": "North"
            }, {
                "attributes": [{
                    "categoryName": "Deductible",
                    "dataType": "Percent",
                    "name": "In Network",
                    "value": "50",
                    "description": "Key"
                }, {
                    "categoryName": "Deductible",
                    "dataType": "Percent",
                    "name": "In Network",
                    "value": "50",
                    "description": "Key"
                }, {
                    "categoryName": "Deductible",
                    "dataType": "Currency",
                    "name": "In Network Individual",
                    "value": "60",
                    "description": "Key"
                }, {
                    "categoryName": "Deductible",
                    "dataType": "Currency",
                    "name": "Out of Network",
                    "value": "30",
                    "description": "Key"
                }, {
                    "categoryName": "Features",
                    "dataType": "Currency",
                    "name": "Baggage Loss, Delay & Damage",
                    "value": "40",
                    "description": "Key"
                }, {
                    "categoryName": "Features",
                    "dataType": "Text",
                    "name": "Emergency Medical",
                    "value": "Included",
                    "description": "Key"
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
                "ID": "4",
                "NumAdults": 2,
                "NumChildren": 2,
                "NumDays": 1,
                "ProductCode": "TI-NW",
                "ProductName": "PPO CA 35",
                "TotalPrice": 10.1,
                "ProductType": "Dental",
                "ProductSubType": "PPO",
                "MarketSegment": "North"
            }],
            "error": "OK",
            "currencyCode": "EUR"
        }
    };
    $scope.carouselWidth = "width:" + parseInt(($scope.control.vlcSI.recSet.length * 222)+20) + "px";
    $scope.currencySymbol = "";
    $scope.currencyCode = $scope.control.vlcSI.currencyCode;
    $scope.currencyMap = [{
        "USD": "$"
    }, {
        "CAD": "$"
    }, {
        "EUR": "€"
    }, {
        "GBP": "£"
    }, {
        "JPY": "¥"
    }, {
        "KRW": "₩"
    }, {
        "CNY": "元"
    }];

    $scope.getSelectValues = function(filter_type) {
        var products = $scope.control.vlcSI['recSet'],
            selectArray = [];
        for(var i = 0; i < products.length; i++) {
            var inSelectArray = false;
            for(var j = 0; j < selectArray.length; j++) {
                if(selectArray[j] === products[i][filter_type]) {
                    inSelectArray = true;
                }
            }
            if(!inSelectArray) {
                selectArray.push(products[i][filter_type]);
            }
        }
        return selectArray;
    };
    $scope.productTypes = $scope.getSelectValues("ProductType");
    $scope.productSubTypes = $scope.getSelectValues("ProductSubType");
    $scope.marketSegment = $scope.getSelectValues("MarketSegment");
    $scope.filters = {"ProductType": null, "ProductSubType": null, "MarketSegment": null};

    $scope.filterChanged = function(data) {
        console.log($scope.filters);
        $scope.filteredProduct = data;
    };

    $scope.showProduct = function(product) {
        var filters = $scope.filters,
            shown = true;
        if(filters.ProductType !== null && filters.ProductType !== product.ProductType) {
            shown = false;
        }
        if(filters.ProductSubType !== null && filters.ProductSubType !== product.ProductSubType) {
            shown = false;
        }
        if(filters.MarketSegment !== null && filters.MarketSegment !== product.MarketSegment) {
            shown = false;
        }
        return shown;
    };

    $scope.formatPrice = function(price) {
        return parseFloat(price).toFixed(2);
    };

    $scope.getCurrencySymbol = function(code) {
        var currencySymbol = "";
        $scope.currencyMap.forEach(function(item) {
            if (item[code] !== undefined) {
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

    // user click - user selects one item in Selectable Items (container)
    // @param
    // control - Element
    // option - the item selected
    // index - index of the selected item
    // scp - Element scope
    $scope.onSelectItem = function(control, option, index, scp, bFlip)
    {
        if(control === undefined || control === null || option === undefined || option === null)
            return;
        // multi-select, single select
        var bSetVal = true;
        var response = [];
        if(bFlip)
        {
            if(option.vlcSelected === undefined || option.vlcSelected === null)
            {
                option.vlcSelected = bSetVal;
            }
            else
            {
                bSetVal = !option.vlcSelected;
                option.vlcSelected = bSetVal;
            }
        }

        // update 'Selectable Items' response
        var recSet = control.vlcSI[control.itemsKey];
        for(var i=0; i<recSet.length; i++)
        {
            if(i !== index && bSetVal && control.propSetMap.selectMode === 'Single')
                 recSet[i].vlcSelected = false;
            if(recSet[i].vlcSelected === true)
                response.push(recSet[i]);
        }

        if(response.length > 0)
            control.response = response;
        else
            control.response = null;

        if(control.propSetMap.dataJSON === true)
            scp.aggregate(scp, control.index, control.indexInParent, true, -1);
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
                    productAssignmentMap[product['code']] = {
                        "value": attributeValue,
                        "dataType": attributeDataType
                    };
                    attributeMap['assignmentValues'] = productAssignmentMap;
                    attributeMap['name'] = attributeName;
                    $scope.categoryMap[categoryName] = {};
                    $scope.categoryMap[categoryName]['attributes'] = {};
                    $scope.categoryMap[categoryName]['attributes'][attributeName] = attributeMap;
                } else {
                    var attributeMap = $scope.categoryMap[categoryName]['attributes'][attributeName];
                    if (attributeMap != null) {
                        var productAssignmentMap = attributeMap['assignmentValues'];
                        productAssignmentMap[product['code']] = {
                            "value": attributeValue,
                            "dataType": attributeDataType
                        };
                    } else {
                        attributeMap = {};
                        var productAssignmentMap = {};
                        productAssignmentMap[product['code']] = {
                            "value": attributeValue,
                            "dataType": attributeDataType
                        };
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
