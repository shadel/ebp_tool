# 1. Install EBP tool
```
npm install --save https://github.com/shadel/ebp_tool#master
```

# 2. How to use EBP on solution
- Import EBP tool

```
import * as ebpTool from "ebp_tool";
```

- Embed html element with id as "diagram-holder"
```
<div id="diagram-holder"></div>
```

- Call method ebpTool.Draw to draw diagram. You can use mockup data below to bind into data parameter
```
ebpTool.Draw(data, document.getElementById("diagram-holder"));
```

# 3. Mockup data
```
{
  "feeders": [],
  "combiners": [],
  "bbuDataMagazines": [
    {
      "name": "227875_Campbelltown_2_UL",
      "cn": "0",
      "srn": "0",
      "boards": [
        {
          "sn": "0",
          "name": "UBBP",
          "type": "WD22UBBPe4",
          "serialNumber": "210305715510JA022623",
          "cpri": [
            {
              "sector": [
                "1"
              ],
              "cell": [
                "227875_Campbelltown_MO_U09A_1"
              ],
              "pn": 0
            },
            {
              "sector": [],
              "cell": [],
              "pn": 1
            },
            {
              "sector": [
                "2"
              ],
              "cell": [
                "227875_Campbelltown_MO_U09A_2"
              ],
              "pn": 2
            },
            {
              "sector": [],
              "cell": [],
              "pn": 3
            },
            {
              "sector": [
                "3"
              ],
              "cell": [
                "227875_Campbelltown_MO_U09A_3"
              ],
              "pn": 4
            },
            {
              "sector": [],
              "cell": [],
              "pn": 5
            }
          ]
        },
        {
          "sn": "1",
          "name": "UBBP",
          "type": "WD22UBBPe4",
          "serialNumber": "210305715510JA022615",
          "cpri": [
            {
              "sector": [
                "1"
              ],
              "cell": [
                "227875_Campbelltown_MO_L08A_1"
              ],
              "pn": 0
            },
            {
              "sector": [],
              "cell": [],
              "pn": 1
            },
            {
              "sector": [
                "2"
              ],
              "cell": [
                "227875_Campbelltown_MO_L08A_2"
              ],
              "pn": 2
            },
            {
              "sector": [],
              "cell": [],
              "pn": 3
            },
            {
              "sector": [
                "3"
              ],
              "cell": [
                "227875_Campbelltown_MO_L08A_3"
              ],
              "pn": 4
            },
            {
              "sector": [],
              "cell": [],
              "pn": 5
            }
          ]
        },
        {
          "sn": "2",
          "name": "UBBP",
          "type": "WD22UBBPe4",
          "serialNumber": "210305715510JA022624",
          "cpri": [
            {
              "sector": [
                "1"
              ],
              "cell": [
                "227875_Campbelltown_MO_L18A_1",
                "227875_Campbelltown_MO_L18B_1"
              ],
              "pn": 0
            },
            {
              "sector": [],
              "cell": [],
              "pn": 1
            },
            {
              "sector": [
                "2"
              ],
              "cell": [
                "227875_Campbelltown_MO_L18A_2",
                "227875_Campbelltown_MO_L18B_2"
              ],
              "pn": 2
            },
            {
              "sector": [],
              "cell": [],
              "pn": 3
            },
            {
              "sector": [
                "3"
              ],
              "cell": [
                "227875_Campbelltown_MO_L18A_3",
                "227875_Campbelltown_MO_L18B_3"
              ],
              "pn": 4
            },
            {
              "sector": [],
              "cell": [],
              "pn": 5
            }
          ]
        },
        {
          "sn": "3",
          "name": "UBBP",
          "type": "WD22UBBPe4",
          "serialNumber": "210305715510JB022798",
          "cpri": [
            {
              "sector": [
                "1"
              ],
              "cell": [
                "227875_Campbelltown_MO_L21C_1",
                "227875_Campbelltown_MO_U21A_1",
                "227875_Campbelltown_MO_U21B_1"
              ],
              "pn": 0
            },
            {
              "sector": [],
              "cell": [],
              "pn": 1
            },
            {
              "sector": [
                "2"
              ],
              "cell": [
                "227875_Campbelltown_MO_L21C_2",
                "227875_Campbelltown_MO_U21A_2",
                "227875_Campbelltown_MO_U21B_2"
              ],
              "pn": 2
            },
            {
              "sector": [],
              "cell": [],
              "pn": 3
            },
            {
              "sector": [
                "3"
              ],
              "cell": [
                "227875_Campbelltown_MO_L21C_3",
                "227875_Campbelltown_MO_U21A_3",
                "227875_Campbelltown_MO_U21B_3"
              ],
              "pn": 4
            },
            {
              "sector": [],
              "cell": [],
              "pn": 5
            }
          ]
        },
        {
          "sn": "7",
          "name": "UMPT",
          "type": "WD22UMPTe1",
          "serialNumber": "210305725110JB001074",
          "cpri": []
        },
        {
          "sn": "16",
          "name": "FAN",
          "type": "WD2E1FANE",
          "serialNumber": "2102311CHK6TJ9918344",
          "cpri": []
        },
        {
          "sn": "18",
          "name": "UPEU",
          "type": "WD2MUPEUD2",
          "serialNumber": "2102310SFMLUJ8023389",
          "cpri": []
        },
        {
          "sn": "19",
          "name": "UPEU",
          "type": "WD2MUPEUD2",
          "serialNumber": "2102310SFMLUJ8013056",
          "cpri": []
        }
      ]
    }
  ],
  "rfuDataMagazines": [],
  "tmas": [],
  "gps": {
    "lat": -34.076427,
    "lon": 150.824165
  },
  "externalConnections": [],
  "rrus": [
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "60",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311UWH10J8000845",
      "model": "WD5MERUMH30",
      "frequencies": [
        "1800"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_1",
            "227875_Campbelltown_MO_L18B_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_1",
            "227875_Campbelltown_MO_L18B_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_1",
            "227875_Campbelltown_MO_L18B_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_1",
            "227875_Campbelltown_MO_L18B_1"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "62",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311UWH10JA001897",
      "model": "WD5MERUMH30",
      "frequencies": [
        "1800"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_2",
            "227875_Campbelltown_MO_L18B_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_2",
            "227875_Campbelltown_MO_L18B_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_2",
            "227875_Campbelltown_MO_L18B_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_2",
            "227875_Campbelltown_MO_L18B_2"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "64",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311UWH10JA001900",
      "model": "WD5MERUMH30",
      "frequencies": [
        "1800"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_3",
            "227875_Campbelltown_MO_L18B_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_3",
            "227875_Campbelltown_MO_L18B_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_3",
            "227875_Campbelltown_MO_L18B_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L18A_3",
            "227875_Campbelltown_MO_L18B_3"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "70",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311BNY10J9001370",
      "model": "WD5MJRUBC50",
      "frequencies": [
        "850"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_1"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "72",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311BNY10J9001270",
      "model": "WD5MJRUBC50",
      "frequencies": [
        "850"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_2"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "74",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311BNY10J9001369",
      "model": "WD5MJRUBC50",
      "frequencies": [
        "850"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L08A_3"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "80",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311QUW10J8000956",
      "model": "WD5MJRUCG8B",
      "frequencies": [
        "900"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_1"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "82",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311QUW10JA000312",
      "model": "WD5MJRUCG8B",
      "frequencies": [
        "900"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_2"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "84",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311QUW10J8000952",
      "model": "WD5MJRUCG8B",
      "frequencies": [
        "900"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_U09A_3"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "90",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311NCV10JA000244",
      "model": "WD5MIRUIG10",
      "frequencies": [
        "2100"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_1",
            "227875_Campbelltown_MO_U21A_1",
            "227875_Campbelltown_MO_U21B_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_1",
            "227875_Campbelltown_MO_U21A_1",
            "227875_Campbelltown_MO_U21B_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_1",
            "227875_Campbelltown_MO_U21A_1",
            "227875_Campbelltown_MO_U21B_1"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "1"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_1",
            "227875_Campbelltown_MO_U21A_1",
            "227875_Campbelltown_MO_U21B_1"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "92",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311NCV10JA000305",
      "model": "WD5MIRUIG10",
      "frequencies": [
        "2100"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_2",
            "227875_Campbelltown_MO_U21A_2",
            "227875_Campbelltown_MO_U21B_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_2",
            "227875_Campbelltown_MO_U21A_2",
            "227875_Campbelltown_MO_U21B_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_2",
            "227875_Campbelltown_MO_U21A_2",
            "227875_Campbelltown_MO_U21B_2"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "2"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_2",
            "227875_Campbelltown_MO_U21A_2",
            "227875_Campbelltown_MO_U21B_2"
          ]
        }
      ]
    },
    {
      "nodeB": [
        "227875_Campbelltown_2_UL"
      ],
      "cn": "0",
      "srn": "94",
      "sn": "0",
      "name": "MRRU",
      "serialNumber": "2102311NCV10JA000190",
      "model": "WD5MIRUIG10",
      "frequencies": [
        "2100"
      ],
      "rfPorts": [
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_3",
            "227875_Campbelltown_MO_U21A_3",
            "227875_Campbelltown_MO_U21B_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_3",
            "227875_Campbelltown_MO_U21A_3",
            "227875_Campbelltown_MO_U21B_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_3",
            "227875_Campbelltown_MO_U21A_3",
            "227875_Campbelltown_MO_U21B_3"
          ]
        },
        {
          "tmaPower": "",
          "usage": "RX And TX",
          "sectors": [
            "3"
          ],
          "cells": [
            "227875_Campbelltown_MO_L21C_3",
            "227875_Campbelltown_MO_U21A_3",
            "227875_Campbelltown_MO_U21B_3"
          ]
        }
      ]
    }
  ],
  "antennas": [
    {
      "sector": "Sector 1",
      "model": "R2V4PX310R",
      "serialNumber": "0014CN104755104",
      "panels": [
        {
          "panelNumber": 1,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 1,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "+"
            },
            {
              "port": 2,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 3,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 3,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "+"
            },
            {
              "port": 4,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 5,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 5,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 6,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 7,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 7,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 8,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 9,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 9,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 10,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 11,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 11,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 12,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        }
      ]
    },
    {
      "sector": "Sector 2",
      "model": "R2V4PX310R",
      "serialNumber": "0014CN104767422",
      "panels": [
        {
          "panelNumber": 1,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 1,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "+"
            },
            {
              "port": 2,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 3,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 3,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "+"
            },
            {
              "port": 4,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 5,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 5,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 6,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 7,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 7,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 8,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 9,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 9,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 10,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 11,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 11,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 12,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        }
      ]
    },
    {
      "sector": "Sector 3",
      "model": "R2V4PX310R",
      "serialNumber": "0014CN104755111",
      "panels": [
        {
          "panelNumber": 1,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 1,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "+"
            },
            {
              "port": 2,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 3,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 3,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "+"
            },
            {
              "port": 4,
              "minimumFrequency": "698",
              "maximumFrequency": "960",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 5,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 5,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 6,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 7,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 7,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 8,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 9,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 9,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 10,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        },
        {
          "panelNumber": 11,
          "minimumTilt": "0",
          "maximumTilt": "10",
          "rfPorts": [
            {
              "port": 11,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "+"
            },
            {
              "port": 12,
              "minimumFrequency": "1710",
              "maximumFrequency": "2690",
              "polarity": "-"
            }
          ]
        }
      ]
    }
  ]
}
```
