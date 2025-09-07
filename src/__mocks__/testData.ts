
/* Fails with error:
There is an error in your model: {"code":"custom","params":{"modelItem":"9cb67952-cb3e-4a2a-adb0-a1855d2f21ef","view":"main-view"},"message":"Invalid item in view.  The item references a non-existant item in the model.","path":[]}, {"code":"custom","params":{"modelItem":"7b7c64c4-9291-40c2-baa9-90c620e56d2d","view":"main-view"},"message":"Invalid item in view.  The item references a non-existant item in the model.","path":[]}, {"code":"custom","params":{"modelItem":"ca2def27-667c-41b4-8f53-129045506fa9","view":"main-view"},"message":"Invalid item in view.  The item references a non-existant item in the model.","path":[]}, {"code":"custom","params":{"modelItem":"6f0a3ea1-7e9c-43c7-87fe-63188d4005d0","view":"main-view"},"message":"Invalid item in view.  The item references a non-existant item in the model.","path":[]}

*/
export const invalidInitialData = {
  "title": "Elvis",
  "icons": [
    {
      "id": "solar-panel",
      "name": "Solar Panel",
      "isIsometric": true,
      "url": "/icons/solar-panel.png",
      "collection": "equipment"
    },
    {
      "id": "battery",
      "name": "Battery",
      "isIsometric": true,
      "url": "/icons/battery.png",
      "collection": "equipment"
    },
    {
      "id": "appliance",
      "name": "Appliance",
      "isIsometric": true,
      "url": "/icons/appliance.png",
      "collection": "equipment"
    },
    {
      "id": "house",
      "name": "House",
      "isIsometric": true,
      "url": "/icons/house.png",
      "collection": "equipment"
    }
  ],
  "colors": [
    {
      "id": "color1",
      "value": "#a5b8f3"
    },
    {
      "id": "color2",
      "value": "#bbadfb"
    },
    {
      "id": "energy-color",
      "value": "#FFFF1C"
    }
  ],
  "items": [
    {
      "id": "9724efc4-9de5-4116-8517-0bf869f94358",
      "name": "",
      "icon": "battery"
    },
    {
      "id": "bee95d2b-58af-4b53-8634-620817b9ee89",
      "name": "",
      "icon": "solar-panel"
    }
  ],
  "views": [
    {
      "id": "main-view",
      "name": "Main view",
      "items": [
        {
          "labelHeight": 80,
          "id": "9cb67952-cb3e-4a2a-adb0-a1855d2f21ef",
          "tile": {
            "x": -1,
            "y": -5
          }
        },
        {
          "labelHeight": 80,
          "id": "7b7c64c4-9291-40c2-baa9-90c620e56d2d",
          "tile": {
            "x": 2,
            "y": -2
          }
        },
        {
          "labelHeight": 80,
          "id": "ca2def27-667c-41b4-8f53-129045506fa9",
          "tile": {
            "x": -1,
            "y": 1
          }
        },
        {
          "labelHeight": 80,
          "id": "6f0a3ea1-7e9c-43c7-87fe-63188d4005d0",
          "tile": {
            "x": -1,
            "y": -2
          }
        }
      ],
      "connectors": [
        {
          "id": "9cb67952-cb3e-4a2a-adb0-a1855d2f21ef-6f0a3ea1-7e9c-43c7-87fe-63188d4005d0",
          "anchors": [
            {
              "id": "6f0a3ea1-7e9c-43c7-87fe-63188d4005d0",
              "ref": {
                "item": "6f0a3ea1-7e9c-43c7-87fe-63188d4005d0"
              }
            },
            {
              "id": "9cb67952-cb3e-4a2a-adb0-a1855d2f21ef",
              "ref": {
                "item": "9cb67952-cb3e-4a2a-adb0-a1855d2f21ef"
              }
            }
          ],
          "width": 10,
          "color": "energy-color"
        },
        {
          "id": "7b7c64c4-9291-40c2-baa9-90c620e56d2d-6f0a3ea1-7e9c-43c7-87fe-63188d4005d0",
          "anchors": [
            {
              "id": "6f0a3ea1-7e9c-43c7-87fe-63188d4005d0",
              "ref": {
                "item": "6f0a3ea1-7e9c-43c7-87fe-63188d4005d0"
              }
            },
            {
              "id": "7b7c64c4-9291-40c2-baa9-90c620e56d2d",
              "ref": {
                "item": "7b7c64c4-9291-40c2-baa9-90c620e56d2d"
              }
            }
          ],
          "width": 2,
          "color": "energy-color"
        },
        {
          "id": "ca2def27-667c-41b4-8f53-129045506fa9-6f0a3ea1-7e9c-43c7-87fe-63188d4005d0",
          "anchors": [
            {
              "id": "ca2def27-667c-41b4-8f53-129045506fa9",
              "ref": {
                "item": "ca2def27-667c-41b4-8f53-129045506fa9"
              }
            },
            {
              "id": "6f0a3ea1-7e9c-43c7-87fe-63188d4005d0",
              "ref": {
                "item": "6f0a3ea1-7e9c-43c7-87fe-63188d4005d0"
              }
            }
          ],
          "width": 8.756822700551975,
          "color": "energy-color"
        }
      ],
      "rectangles": [],
      "textBoxes": [],
      "lastUpdated": "2025-09-02T19:52:11.466Z"
    }
  ]
};

const validInitialData = {
    "title": "Elvis",
    "icons": [
        {
            "id": "solar-panel",
            "name": "Solar Panel",
            "isIsometric": true,
            "url": "/icons/solar-panel.png",
            "collection": "equipment"
        },
        {
            "id": "battery",
            "name": "Battery",
            "isIsometric": true,
            "url": "/icons/battery.png",
            "collection": "equipment"
        },
        {
            "id": "appliance",
            "name": "Appliance",
            "isIsometric": true,
            "url": "/icons/appliance.png",
            "collection": "equipment"
        },
        {
            "id": "house",
            "name": "House",
            "isIsometric": true,
            "url": "/icons/house.png",
            "collection": "equipment"
        }
    ],
    "colors": [
        {
            "id": "color1",
            "value": "#a5b8f3"
        },
        {
            "id": "color2",
            "value": "#bbadfb"
        },
        {
            "id": "energy-color",
            "value": "#FFFF1C"
        }
    ],
    "items": [
        {
            "id": "e71bf87d-b775-458e-ae4d-d7466edf971e",
            "name": "",
            "icon": "solar-panel"
        },
        {
            "id": "2d64618f-df40-42f4-88fe-c774efd4c26f",
            "name": "",
            "icon": "house"
        },
        {
            "id": "b7b19094-1787-4dda-8ad1-82078c554c92",
            "name": "",
            "icon": "battery"
        },
        {
            "id": "835b13a9-0917-4407-8e78-322b781b6460",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "2817e0e3-e9f8-4cec-ba44-3456964a47e1",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "c7435a6f-bcbe-4afa-a563-6b7cdf956e3c",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "3fd86d44-74f8-474b-b3c1-8b5e32f05df5",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "1d2584eb-18ff-4f4e-8506-a75dfb5a4b04",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "b994649a-6b0c-424c-ba20-44f3e044b4f2",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "d0fc1e2a-5169-4e69-a0cb-894f10b74634",
            "name": "",
            "icon": "battery"
        },
        {
            "id": "fa657046-2fca-4789-b640-97d8b59cb494",
            "name": "",
            "icon": "solar-panel"
        },
        {
            "id": "74118f54-c906-4c22-828d-ab3be53bc819",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "64bea427-91fb-44bf-a1a5-9e5e8d3c5a0a",
            "name": "",
            "icon": "battery"
        },
        {
            "id": "2c71d868-3663-4a70-9450-410027c1e4d0",
            "name": "",
            "icon": "battery"
        },
        {
            "id": "403b5a1a-a719-4a0d-b94a-af3fd92793f8",
            "name": "",
            "icon": "solar-panel"
        },
        {
            "id": "ea6fb431-49a5-43ab-906d-9fa3b1af018e",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "ceba37cd-4ad3-4609-8014-fd063cf50438",
            "name": "",
            "icon": "battery"
        },
        {
            "id": "47fb5b95-c9ce-48f1-b861-28405bd50769",
            "name": "",
            "icon": "solar-panel"
        },
        {
            "id": "dcc432e4-d9bd-4384-80f0-0669704b6785",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "7e7797dc-96ab-4b3b-854b-bc2c15d3bcf6",
            "name": "",
            "icon": "solar-panel"
        },
        {
            "id": "60def48a-f2dc-4435-ad87-4e9b62c5d238",
            "name": "",
            "icon": "battery"
        },
        {
            "id": "1d7d2700-a065-4e98-b7cf-ac33aae79c72",
            "name": "",
            "icon": "appliance"
        },
        {
            "id": "35c0e865-d433-43d2-b564-dcb0f06e0684",
            "name": "",
            "icon": "battery"
        },
        {
            "id": "7c1eb505-23bd-4aa5-98b7-e4f2ae55c072",
            "name": "",
            "icon": "solar-panel"
        }
    ],
    "views": [
        {
            "connectors": [
                {
                    "id": "7c1eb505-23bd-4aa5-98b7-e4f2ae55c072-2d64618f-df40-42f4-88fe-c774efd4c26f",
                    "anchors": [
                        {
                            "id": "7c1eb505-23bd-4aa5-98b7-e4f2ae55c072",
                            "ref": {
                                "item": "7c1eb505-23bd-4aa5-98b7-e4f2ae55c072"
                            }
                        },
                        {
                            "id": "2d64618f-df40-42f4-88fe-c774efd4c26f",
                            "ref": {
                                "item": "2d64618f-df40-42f4-88fe-c774efd4c26f"
                            }
                        }
                    ],
                    "width": 9.520035265050854,
                    "color": "energy-color"
                },
                {
                    "id": "35c0e865-d433-43d2-b564-dcb0f06e0684-2d64618f-df40-42f4-88fe-c774efd4c26f",
                    "anchors": [
                        {
                            "id": "2d64618f-df40-42f4-88fe-c774efd4c26f",
                            "ref": {
                                "item": "2d64618f-df40-42f4-88fe-c774efd4c26f"
                            }
                        },
                        {
                            "id": "35c0e865-d433-43d2-b564-dcb0f06e0684",
                            "ref": {
                                "item": "35c0e865-d433-43d2-b564-dcb0f06e0684"
                            }
                        }
                    ],
                    "width": 2,
                    "color": "energy-color"
                },
                {
                    "id": "1d7d2700-a065-4e98-b7cf-ac33aae79c72-2d64618f-df40-42f4-88fe-c774efd4c26f",
                    "anchors": [
                        {
                            "id": "2d64618f-df40-42f4-88fe-c774efd4c26f",
                            "ref": {
                                "item": "2d64618f-df40-42f4-88fe-c774efd4c26f"
                            }
                        },
                        {
                            "id": "1d7d2700-a065-4e98-b7cf-ac33aae79c72",
                            "ref": {
                                "item": "1d7d2700-a065-4e98-b7cf-ac33aae79c72"
                            }
                        }
                    ],
                    "width": 10,
                    "color": "energy-color"
                },
                {
                    "id": "ea6fb431-49a5-43ab-906d-9fa3b1af018e-2d64618f-df40-42f4-88fe-c774efd4c26f",
                    "anchors": [
                        {
                            "id": "2d64618f-df40-42f4-88fe-c774efd4c26f",
                            "ref": {
                                "item": "2d64618f-df40-42f4-88fe-c774efd4c26f"
                            }
                        },
                        {
                            "id": "ea6fb431-49a5-43ab-906d-9fa3b1af018e",
                            "ref": {
                                "item": "ea6fb431-49a5-43ab-906d-9fa3b1af018e"
                            }
                        }
                    ],
                    "width": 10,
                    "color": "energy-color"
                },
                {
                    "id": "d0fc1e2a-5169-4e69-a0cb-894f10b74634-2d64618f-df40-42f4-88fe-c774efd4c26f",
                    "anchors": [
                        {
                            "id": "2d64618f-df40-42f4-88fe-c774efd4c26f",
                            "ref": {
                                "item": "2d64618f-df40-42f4-88fe-c774efd4c26f"
                            }
                        },
                        {
                            "id": "d0fc1e2a-5169-4e69-a0cb-894f10b74634",
                            "ref": {
                                "item": "d0fc1e2a-5169-4e69-a0cb-894f10b74634"
                            }
                        }
                    ],
                    "width": 2,
                    "color": "energy-color"
                },
                {
                    "id": "e71bf87d-b775-458e-ae4d-d7466edf971e-2d64618f-df40-42f4-88fe-c774efd4c26f",
                    "anchors": [
                        {
                            "id": "e71bf87d-b775-458e-ae4d-d7466edf971e",
                            "ref": {
                                "item": "e71bf87d-b775-458e-ae4d-d7466edf971e"
                            }
                        },
                        {
                            "id": "2d64618f-df40-42f4-88fe-c774efd4c26f",
                            "ref": {
                                "item": "2d64618f-df40-42f4-88fe-c774efd4c26f"
                            }
                        }
                    ],
                    "width": 9.520035265050854,
                    "color": "energy-color",
                    "description": ""
                }
            ],
            "id": "main-view",
            "name": "Main view",
            "items": [
                {
                    "labelHeight": 80,
                    "id": "7c1eb505-23bd-4aa5-98b7-e4f2ae55c072",
                    "tile": {
                        "x": -2,
                        "y": -4
                    }
                },
                {
                    "labelHeight": 80,
                    "id": "35c0e865-d433-43d2-b564-dcb0f06e0684",
                    "tile": {
                        "x": 1,
                        "y": -4
                    }
                },
                {
                    "labelHeight": 80,
                    "id": "1d7d2700-a065-4e98-b7cf-ac33aae79c72",
                    "tile": {
                        "x": 2,
                        "y": -2
                    }
                },
                {
                    "labelHeight": 80,
                    "id": "ea6fb431-49a5-43ab-906d-9fa3b1af018e",
                    "tile": {
                        "x": 2,
                        "y": 0
                    }
                },
                {
                    "labelHeight": 80,
                    "id": "d0fc1e2a-5169-4e69-a0cb-894f10b74634",
                    "tile": {
                        "x": -2,
                        "y": -2
                    }
                },
                {
                    "labelHeight": 80,
                    "id": "2d64618f-df40-42f4-88fe-c774efd4c26f",
                    "tile": {
                        "x": 0,
                        "y": -2
                    }
                },
                {
                    "labelHeight": 80,
                    "id": "e71bf87d-b775-458e-ae4d-d7466edf971e",
                    "tile": {
                        "x": 0,
                        "y": 0
                    }
                }
            ],
            "rectangles": [],
            "textBoxes": [],
            "lastUpdated": "2025-09-02T21:07:42.106Z"
        }
    ]
};
