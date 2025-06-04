/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 44.0, "minX": 0.0, "maxY": 39712.0, "series": [{"data": [[0.0, 44.0], [0.1, 53.0], [0.2, 60.0], [0.3, 64.0], [0.4, 65.0], [0.5, 66.0], [0.6, 66.0], [0.7, 67.0], [0.8, 68.0], [0.9, 69.0], [1.0, 69.0], [1.1, 70.0], [1.2, 71.0], [1.3, 72.0], [1.4, 72.0], [1.5, 73.0], [1.6, 74.0], [1.7, 75.0], [1.8, 76.0], [1.9, 77.0], [2.0, 79.0], [2.1, 81.0], [2.2, 83.0], [2.3, 84.0], [2.4, 85.0], [2.5, 86.0], [2.6, 87.0], [2.7, 88.0], [2.8, 88.0], [2.9, 89.0], [3.0, 90.0], [3.1, 91.0], [3.2, 91.0], [3.3, 92.0], [3.4, 93.0], [3.5, 94.0], [3.6, 94.0], [3.7, 95.0], [3.8, 95.0], [3.9, 96.0], [4.0, 96.0], [4.1, 97.0], [4.2, 98.0], [4.3, 98.0], [4.4, 100.0], [4.5, 100.0], [4.6, 100.0], [4.7, 101.0], [4.8, 102.0], [4.9, 102.0], [5.0, 103.0], [5.1, 103.0], [5.2, 103.0], [5.3, 104.0], [5.4, 105.0], [5.5, 105.0], [5.6, 106.0], [5.7, 106.0], [5.8, 106.0], [5.9, 107.0], [6.0, 107.0], [6.1, 108.0], [6.2, 108.0], [6.3, 109.0], [6.4, 109.0], [6.5, 109.0], [6.6, 110.0], [6.7, 110.0], [6.8, 110.0], [6.9, 111.0], [7.0, 111.0], [7.1, 111.0], [7.2, 112.0], [7.3, 112.0], [7.4, 113.0], [7.5, 113.0], [7.6, 113.0], [7.7, 114.0], [7.8, 114.0], [7.9, 114.0], [8.0, 115.0], [8.1, 115.0], [8.2, 115.0], [8.3, 115.0], [8.4, 115.0], [8.5, 116.0], [8.6, 116.0], [8.7, 116.0], [8.8, 117.0], [8.9, 117.0], [9.0, 117.0], [9.1, 117.0], [9.2, 118.0], [9.3, 118.0], [9.4, 118.0], [9.5, 118.0], [9.6, 118.0], [9.7, 119.0], [9.8, 119.0], [9.9, 119.0], [10.0, 119.0], [10.1, 119.0], [10.2, 119.0], [10.3, 120.0], [10.4, 120.0], [10.5, 120.0], [10.6, 121.0], [10.7, 121.0], [10.8, 121.0], [10.9, 121.0], [11.0, 122.0], [11.1, 122.0], [11.2, 122.0], [11.3, 122.0], [11.4, 122.0], [11.5, 123.0], [11.6, 123.0], [11.7, 123.0], [11.8, 123.0], [11.9, 123.0], [12.0, 123.0], [12.1, 124.0], [12.2, 124.0], [12.3, 124.0], [12.4, 124.0], [12.5, 124.0], [12.6, 124.0], [12.7, 124.0], [12.8, 125.0], [12.9, 125.0], [13.0, 125.0], [13.1, 125.0], [13.2, 125.0], [13.3, 125.0], [13.4, 126.0], [13.5, 126.0], [13.6, 126.0], [13.7, 126.0], [13.8, 126.0], [13.9, 126.0], [14.0, 126.0], [14.1, 126.0], [14.2, 126.0], [14.3, 127.0], [14.4, 127.0], [14.5, 127.0], [14.6, 127.0], [14.7, 127.0], [14.8, 127.0], [14.9, 127.0], [15.0, 127.0], [15.1, 127.0], [15.2, 128.0], [15.3, 128.0], [15.4, 128.0], [15.5, 128.0], [15.6, 128.0], [15.7, 128.0], [15.8, 128.0], [15.9, 128.0], [16.0, 128.0], [16.1, 128.0], [16.2, 129.0], [16.3, 129.0], [16.4, 129.0], [16.5, 129.0], [16.6, 129.0], [16.7, 129.0], [16.8, 129.0], [16.9, 129.0], [17.0, 129.0], [17.1, 129.0], [17.2, 129.0], [17.3, 129.0], [17.4, 130.0], [17.5, 130.0], [17.6, 130.0], [17.7, 130.0], [17.8, 130.0], [17.9, 130.0], [18.0, 130.0], [18.1, 130.0], [18.2, 130.0], [18.3, 130.0], [18.4, 130.0], [18.5, 130.0], [18.6, 131.0], [18.7, 131.0], [18.8, 131.0], [18.9, 131.0], [19.0, 131.0], [19.1, 131.0], [19.2, 131.0], [19.3, 131.0], [19.4, 131.0], [19.5, 131.0], [19.6, 131.0], [19.7, 131.0], [19.8, 131.0], [19.9, 131.0], [20.0, 132.0], [20.1, 132.0], [20.2, 132.0], [20.3, 132.0], [20.4, 132.0], [20.5, 132.0], [20.6, 132.0], [20.7, 132.0], [20.8, 132.0], [20.9, 132.0], [21.0, 132.0], [21.1, 132.0], [21.2, 132.0], [21.3, 132.0], [21.4, 132.0], [21.5, 132.0], [21.6, 133.0], [21.7, 133.0], [21.8, 133.0], [21.9, 133.0], [22.0, 133.0], [22.1, 133.0], [22.2, 133.0], [22.3, 133.0], [22.4, 133.0], [22.5, 133.0], [22.6, 133.0], [22.7, 133.0], [22.8, 133.0], [22.9, 133.0], [23.0, 133.0], [23.1, 133.0], [23.2, 134.0], [23.3, 134.0], [23.4, 134.0], [23.5, 134.0], [23.6, 134.0], [23.7, 134.0], [23.8, 134.0], [23.9, 134.0], [24.0, 134.0], [24.1, 134.0], [24.2, 134.0], [24.3, 134.0], [24.4, 134.0], [24.5, 134.0], [24.6, 134.0], [24.7, 134.0], [24.8, 134.0], [24.9, 134.0], [25.0, 135.0], [25.1, 135.0], [25.2, 135.0], [25.3, 135.0], [25.4, 135.0], [25.5, 135.0], [25.6, 135.0], [25.7, 135.0], [25.8, 135.0], [25.9, 135.0], [26.0, 135.0], [26.1, 135.0], [26.2, 135.0], [26.3, 135.0], [26.4, 135.0], [26.5, 135.0], [26.6, 135.0], [26.7, 136.0], [26.8, 136.0], [26.9, 136.0], [27.0, 136.0], [27.1, 136.0], [27.2, 136.0], [27.3, 136.0], [27.4, 136.0], [27.5, 136.0], [27.6, 136.0], [27.7, 136.0], [27.8, 136.0], [27.9, 136.0], [28.0, 136.0], [28.1, 136.0], [28.2, 136.0], [28.3, 136.0], [28.4, 136.0], [28.5, 136.0], [28.6, 136.0], [28.7, 137.0], [28.8, 137.0], [28.9, 137.0], [29.0, 137.0], [29.1, 137.0], [29.2, 137.0], [29.3, 137.0], [29.4, 137.0], [29.5, 137.0], [29.6, 137.0], [29.7, 137.0], [29.8, 137.0], [29.9, 137.0], [30.0, 137.0], [30.1, 137.0], [30.2, 137.0], [30.3, 137.0], [30.4, 137.0], [30.5, 137.0], [30.6, 137.0], [30.7, 137.0], [30.8, 137.0], [30.9, 138.0], [31.0, 138.0], [31.1, 138.0], [31.2, 138.0], [31.3, 138.0], [31.4, 138.0], [31.5, 138.0], [31.6, 138.0], [31.7, 138.0], [31.8, 138.0], [31.9, 138.0], [32.0, 138.0], [32.1, 138.0], [32.2, 138.0], [32.3, 138.0], [32.4, 138.0], [32.5, 138.0], [32.6, 138.0], [32.7, 138.0], [32.8, 138.0], [32.9, 138.0], [33.0, 139.0], [33.1, 139.0], [33.2, 139.0], [33.3, 139.0], [33.4, 139.0], [33.5, 139.0], [33.6, 139.0], [33.7, 139.0], [33.8, 139.0], [33.9, 139.0], [34.0, 139.0], [34.1, 139.0], [34.2, 139.0], [34.3, 139.0], [34.4, 139.0], [34.5, 139.0], [34.6, 139.0], [34.7, 139.0], [34.8, 139.0], [34.9, 139.0], [35.0, 139.0], [35.1, 140.0], [35.2, 140.0], [35.3, 140.0], [35.4, 140.0], [35.5, 140.0], [35.6, 140.0], [35.7, 140.0], [35.8, 140.0], [35.9, 140.0], [36.0, 140.0], [36.1, 140.0], [36.2, 140.0], [36.3, 140.0], [36.4, 140.0], [36.5, 140.0], [36.6, 140.0], [36.7, 140.0], [36.8, 140.0], [36.9, 140.0], [37.0, 140.0], [37.1, 140.0], [37.2, 140.0], [37.3, 141.0], [37.4, 141.0], [37.5, 141.0], [37.6, 141.0], [37.7, 141.0], [37.8, 141.0], [37.9, 141.0], [38.0, 141.0], [38.1, 141.0], [38.2, 141.0], [38.3, 141.0], [38.4, 141.0], [38.5, 141.0], [38.6, 141.0], [38.7, 141.0], [38.8, 141.0], [38.9, 141.0], [39.0, 141.0], [39.1, 141.0], [39.2, 141.0], [39.3, 141.0], [39.4, 141.0], [39.5, 141.0], [39.6, 141.0], [39.7, 141.0], [39.8, 142.0], [39.9, 142.0], [40.0, 142.0], [40.1, 142.0], [40.2, 142.0], [40.3, 142.0], [40.4, 142.0], [40.5, 142.0], [40.6, 142.0], [40.7, 142.0], [40.8, 142.0], [40.9, 142.0], [41.0, 142.0], [41.1, 142.0], [41.2, 142.0], [41.3, 142.0], [41.4, 142.0], [41.5, 142.0], [41.6, 142.0], [41.7, 142.0], [41.8, 142.0], [41.9, 143.0], [42.0, 143.0], [42.1, 143.0], [42.2, 143.0], [42.3, 143.0], [42.4, 143.0], [42.5, 143.0], [42.6, 143.0], [42.7, 143.0], [42.8, 143.0], [42.9, 143.0], [43.0, 143.0], [43.1, 143.0], [43.2, 143.0], [43.3, 143.0], [43.4, 143.0], [43.5, 143.0], [43.6, 143.0], [43.7, 143.0], [43.8, 143.0], [43.9, 143.0], [44.0, 143.0], [44.1, 143.0], [44.2, 144.0], [44.3, 144.0], [44.4, 144.0], [44.5, 144.0], [44.6, 144.0], [44.7, 144.0], [44.8, 144.0], [44.9, 144.0], [45.0, 144.0], [45.1, 144.0], [45.2, 144.0], [45.3, 144.0], [45.4, 144.0], [45.5, 144.0], [45.6, 144.0], [45.7, 144.0], [45.8, 144.0], [45.9, 144.0], [46.0, 144.0], [46.1, 144.0], [46.2, 144.0], [46.3, 145.0], [46.4, 145.0], [46.5, 145.0], [46.6, 145.0], [46.7, 145.0], [46.8, 145.0], [46.9, 145.0], [47.0, 145.0], [47.1, 145.0], [47.2, 145.0], [47.3, 145.0], [47.4, 145.0], [47.5, 145.0], [47.6, 145.0], [47.7, 145.0], [47.8, 145.0], [47.9, 145.0], [48.0, 145.0], [48.1, 145.0], [48.2, 145.0], [48.3, 145.0], [48.4, 145.0], [48.5, 146.0], [48.6, 146.0], [48.7, 146.0], [48.8, 146.0], [48.9, 146.0], [49.0, 146.0], [49.1, 146.0], [49.2, 146.0], [49.3, 146.0], [49.4, 146.0], [49.5, 146.0], [49.6, 146.0], [49.7, 146.0], [49.8, 146.0], [49.9, 146.0], [50.0, 146.0], [50.1, 146.0], [50.2, 146.0], [50.3, 146.0], [50.4, 146.0], [50.5, 146.0], [50.6, 146.0], [50.7, 146.0], [50.8, 146.0], [50.9, 147.0], [51.0, 147.0], [51.1, 147.0], [51.2, 147.0], [51.3, 147.0], [51.4, 147.0], [51.5, 147.0], [51.6, 147.0], [51.7, 147.0], [51.8, 147.0], [51.9, 147.0], [52.0, 147.0], [52.1, 147.0], [52.2, 147.0], [52.3, 147.0], [52.4, 147.0], [52.5, 147.0], [52.6, 147.0], [52.7, 147.0], [52.8, 147.0], [52.9, 147.0], [53.0, 147.0], [53.1, 147.0], [53.2, 148.0], [53.3, 148.0], [53.4, 148.0], [53.5, 148.0], [53.6, 148.0], [53.7, 148.0], [53.8, 148.0], [53.9, 148.0], [54.0, 148.0], [54.1, 148.0], [54.2, 148.0], [54.3, 148.0], [54.4, 148.0], [54.5, 148.0], [54.6, 148.0], [54.7, 148.0], [54.8, 148.0], [54.9, 148.0], [55.0, 148.0], [55.1, 148.0], [55.2, 148.0], [55.3, 149.0], [55.4, 149.0], [55.5, 149.0], [55.6, 149.0], [55.7, 149.0], [55.8, 149.0], [55.9, 149.0], [56.0, 149.0], [56.1, 149.0], [56.2, 149.0], [56.3, 149.0], [56.4, 149.0], [56.5, 149.0], [56.6, 149.0], [56.7, 149.0], [56.8, 149.0], [56.9, 149.0], [57.0, 149.0], [57.1, 149.0], [57.2, 149.0], [57.3, 150.0], [57.4, 150.0], [57.5, 150.0], [57.6, 150.0], [57.7, 150.0], [57.8, 150.0], [57.9, 150.0], [58.0, 150.0], [58.1, 150.0], [58.2, 150.0], [58.3, 150.0], [58.4, 150.0], [58.5, 150.0], [58.6, 150.0], [58.7, 150.0], [58.8, 150.0], [58.9, 150.0], [59.0, 150.0], [59.1, 150.0], [59.2, 150.0], [59.3, 151.0], [59.4, 151.0], [59.5, 151.0], [59.6, 151.0], [59.7, 151.0], [59.8, 151.0], [59.9, 151.0], [60.0, 151.0], [60.1, 151.0], [60.2, 151.0], [60.3, 151.0], [60.4, 151.0], [60.5, 151.0], [60.6, 151.0], [60.7, 151.0], [60.8, 151.0], [60.9, 151.0], [61.0, 151.0], [61.1, 151.0], [61.2, 151.0], [61.3, 151.0], [61.4, 152.0], [61.5, 152.0], [61.6, 152.0], [61.7, 152.0], [61.8, 152.0], [61.9, 152.0], [62.0, 152.0], [62.1, 152.0], [62.2, 152.0], [62.3, 152.0], [62.4, 152.0], [62.5, 152.0], [62.6, 152.0], [62.7, 152.0], [62.8, 152.0], [62.9, 152.0], [63.0, 152.0], [63.1, 153.0], [63.2, 153.0], [63.3, 153.0], [63.4, 153.0], [63.5, 153.0], [63.6, 153.0], [63.7, 153.0], [63.8, 153.0], [63.9, 153.0], [64.0, 153.0], [64.1, 153.0], [64.2, 153.0], [64.3, 153.0], [64.4, 153.0], [64.5, 153.0], [64.6, 153.0], [64.7, 154.0], [64.8, 154.0], [64.9, 154.0], [65.0, 154.0], [65.1, 154.0], [65.2, 154.0], [65.3, 154.0], [65.4, 154.0], [65.5, 154.0], [65.6, 154.0], [65.7, 154.0], [65.8, 154.0], [65.9, 154.0], [66.0, 154.0], [66.1, 154.0], [66.2, 154.0], [66.3, 155.0], [66.4, 155.0], [66.5, 155.0], [66.6, 155.0], [66.7, 155.0], [66.8, 155.0], [66.9, 155.0], [67.0, 155.0], [67.1, 155.0], [67.2, 155.0], [67.3, 155.0], [67.4, 155.0], [67.5, 155.0], [67.6, 156.0], [67.7, 156.0], [67.8, 156.0], [67.9, 156.0], [68.0, 156.0], [68.1, 156.0], [68.2, 156.0], [68.3, 156.0], [68.4, 156.0], [68.5, 156.0], [68.6, 156.0], [68.7, 156.0], [68.8, 156.0], [68.9, 156.0], [69.0, 156.0], [69.1, 156.0], [69.2, 157.0], [69.3, 157.0], [69.4, 157.0], [69.5, 157.0], [69.6, 157.0], [69.7, 157.0], [69.8, 157.0], [69.9, 157.0], [70.0, 157.0], [70.1, 157.0], [70.2, 157.0], [70.3, 158.0], [70.4, 158.0], [70.5, 158.0], [70.6, 158.0], [70.7, 158.0], [70.8, 158.0], [70.9, 158.0], [71.0, 158.0], [71.1, 158.0], [71.2, 158.0], [71.3, 158.0], [71.4, 158.0], [71.5, 159.0], [71.6, 159.0], [71.7, 159.0], [71.8, 159.0], [71.9, 159.0], [72.0, 159.0], [72.1, 159.0], [72.2, 159.0], [72.3, 159.0], [72.4, 159.0], [72.5, 159.0], [72.6, 160.0], [72.7, 160.0], [72.8, 160.0], [72.9, 160.0], [73.0, 160.0], [73.1, 160.0], [73.2, 160.0], [73.3, 160.0], [73.4, 160.0], [73.5, 161.0], [73.6, 161.0], [73.7, 161.0], [73.8, 161.0], [73.9, 161.0], [74.0, 161.0], [74.1, 161.0], [74.2, 161.0], [74.3, 161.0], [74.4, 161.0], [74.5, 162.0], [74.6, 162.0], [74.7, 162.0], [74.8, 162.0], [74.9, 162.0], [75.0, 162.0], [75.1, 162.0], [75.2, 162.0], [75.3, 162.0], [75.4, 162.0], [75.5, 163.0], [75.6, 163.0], [75.7, 163.0], [75.8, 163.0], [75.9, 163.0], [76.0, 163.0], [76.1, 163.0], [76.2, 164.0], [76.3, 164.0], [76.4, 164.0], [76.5, 164.0], [76.6, 164.0], [76.7, 164.0], [76.8, 165.0], [76.9, 165.0], [77.0, 165.0], [77.1, 165.0], [77.2, 165.0], [77.3, 165.0], [77.4, 165.0], [77.5, 166.0], [77.6, 166.0], [77.7, 166.0], [77.8, 166.0], [77.9, 166.0], [78.0, 166.0], [78.1, 167.0], [78.2, 167.0], [78.3, 167.0], [78.4, 167.0], [78.5, 167.0], [78.6, 168.0], [78.7, 168.0], [78.8, 168.0], [78.9, 168.0], [79.0, 168.0], [79.1, 168.0], [79.2, 169.0], [79.3, 169.0], [79.4, 169.0], [79.5, 169.0], [79.6, 169.0], [79.7, 169.0], [79.8, 170.0], [79.9, 170.0], [80.0, 170.0], [80.1, 170.0], [80.2, 170.0], [80.3, 170.0], [80.4, 171.0], [80.5, 171.0], [80.6, 171.0], [80.7, 172.0], [80.8, 172.0], [80.9, 172.0], [81.0, 172.0], [81.1, 172.0], [81.2, 173.0], [81.3, 173.0], [81.4, 173.0], [81.5, 173.0], [81.6, 174.0], [81.7, 174.0], [81.8, 174.0], [81.9, 175.0], [82.0, 175.0], [82.1, 175.0], [82.2, 176.0], [82.3, 176.0], [82.4, 176.0], [82.5, 176.0], [82.6, 177.0], [82.7, 177.0], [82.8, 177.0], [82.9, 178.0], [83.0, 178.0], [83.1, 178.0], [83.2, 178.0], [83.3, 179.0], [83.4, 179.0], [83.5, 179.0], [83.6, 179.0], [83.7, 180.0], [83.8, 180.0], [83.9, 180.0], [84.0, 181.0], [84.1, 181.0], [84.2, 181.0], [84.3, 182.0], [84.4, 182.0], [84.5, 183.0], [84.6, 183.0], [84.7, 183.0], [84.8, 184.0], [84.9, 184.0], [85.0, 184.0], [85.1, 184.0], [85.2, 185.0], [85.3, 186.0], [85.4, 186.0], [85.5, 186.0], [85.6, 187.0], [85.7, 187.0], [85.8, 188.0], [85.9, 188.0], [86.0, 188.0], [86.1, 189.0], [86.2, 190.0], [86.3, 190.0], [86.4, 191.0], [86.5, 191.0], [86.6, 191.0], [86.7, 192.0], [86.8, 192.0], [86.9, 193.0], [87.0, 193.0], [87.1, 195.0], [87.2, 195.0], [87.3, 195.0], [87.4, 196.0], [87.5, 196.0], [87.6, 197.0], [87.7, 197.0], [87.8, 198.0], [87.9, 199.0], [88.0, 200.0], [88.1, 200.0], [88.2, 201.0], [88.3, 202.0], [88.4, 202.0], [88.5, 203.0], [88.6, 203.0], [88.7, 205.0], [88.8, 205.0], [88.9, 207.0], [89.0, 208.0], [89.1, 209.0], [89.2, 210.0], [89.3, 211.0], [89.4, 212.0], [89.5, 213.0], [89.6, 214.0], [89.7, 215.0], [89.8, 217.0], [89.9, 218.0], [90.0, 221.0], [90.1, 224.0], [90.2, 227.0], [90.3, 234.0], [90.4, 244.0], [90.5, 257.0], [90.6, 285.0], [90.7, 301.0], [90.8, 333.0], [90.9, 407.0], [91.0, 437.0], [91.1, 481.0], [91.2, 524.0], [91.3, 598.0], [91.4, 817.0], [91.5, 955.0], [91.6, 1151.0], [91.7, 1314.0], [91.8, 1566.0], [91.9, 1811.0], [92.0, 1926.0], [92.1, 2040.0], [92.2, 2296.0], [92.3, 2489.0], [92.4, 2661.0], [92.5, 2748.0], [92.6, 2867.0], [92.7, 3035.0], [92.8, 3185.0], [92.9, 3327.0], [93.0, 3433.0], [93.1, 3565.0], [93.2, 3635.0], [93.3, 3719.0], [93.4, 3850.0], [93.5, 3968.0], [93.6, 4058.0], [93.7, 4178.0], [93.8, 4241.0], [93.9, 4384.0], [94.0, 4438.0], [94.1, 4493.0], [94.2, 4536.0], [94.3, 4636.0], [94.4, 4727.0], [94.5, 4816.0], [94.6, 4922.0], [94.7, 5051.0], [94.8, 5098.0], [94.9, 5204.0], [95.0, 5314.0], [95.1, 5383.0], [95.2, 5458.0], [95.3, 5582.0], [95.4, 5639.0], [95.5, 5691.0], [95.6, 5749.0], [95.7, 5893.0], [95.8, 5966.0], [95.9, 6017.0], [96.0, 6124.0], [96.1, 6229.0], [96.2, 6310.0], [96.3, 6395.0], [96.4, 6519.0], [96.5, 6600.0], [96.6, 6790.0], [96.7, 6852.0], [96.8, 6925.0], [96.9, 7001.0], [97.0, 7094.0], [97.1, 7192.0], [97.2, 7345.0], [97.3, 7479.0], [97.4, 7561.0], [97.5, 7672.0], [97.6, 7757.0], [97.7, 7816.0], [97.8, 7899.0], [97.9, 8017.0], [98.0, 8106.0], [98.1, 8178.0], [98.2, 8344.0], [98.3, 8456.0], [98.4, 8613.0], [98.5, 8754.0], [98.6, 8922.0], [98.7, 9034.0], [98.8, 9217.0], [98.9, 9485.0], [99.0, 9822.0], [99.1, 9997.0], [99.2, 10245.0], [99.3, 10563.0], [99.4, 11054.0], [99.5, 11941.0], [99.6, 12468.0], [99.7, 13362.0], [99.8, 14873.0], [99.9, 16732.0], [100.0, 39712.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 8358.0, "series": [{"data": [[0.0, 440.0], [100.0, 8358.0], [39700.0, 1.0], [200.0, 269.0], [300.0, 21.0], [400.0, 26.0], [500.0, 16.0], [600.0, 2.0], [700.0, 4.0], [800.0, 10.0], [900.0, 9.0], [1000.0, 3.0], [1100.0, 5.0], [1200.0, 6.0], [1300.0, 3.0], [1400.0, 4.0], [1500.0, 5.0], [1600.0, 2.0], [1700.0, 5.0], [1800.0, 10.0], [1900.0, 6.0], [2000.0, 10.0], [2100.0, 2.0], [2300.0, 4.0], [2200.0, 4.0], [2400.0, 6.0], [2500.0, 7.0], [2600.0, 9.0], [2700.0, 9.0], [2800.0, 5.0], [2900.0, 8.0], [3000.0, 9.0], [3100.0, 3.0], [3300.0, 11.0], [3200.0, 7.0], [3400.0, 6.0], [3500.0, 10.0], [3600.0, 14.0], [3700.0, 8.0], [3800.0, 9.0], [3900.0, 10.0], [4000.0, 10.0], [4100.0, 7.0], [4200.0, 13.0], [4300.0, 8.0], [4600.0, 10.0], [4500.0, 16.0], [4400.0, 18.0], [4700.0, 10.0], [4800.0, 11.0], [5000.0, 14.0], [5100.0, 6.0], [4900.0, 8.0], [5300.0, 15.0], [5200.0, 12.0], [5400.0, 10.0], [5600.0, 21.0], [5500.0, 8.0], [5800.0, 10.0], [5700.0, 9.0], [6000.0, 5.0], [5900.0, 18.0], [6100.0, 12.0], [6200.0, 12.0], [6300.0, 12.0], [6600.0, 5.0], [6400.0, 9.0], [6500.0, 10.0], [6700.0, 8.0], [6800.0, 15.0], [6900.0, 11.0], [7000.0, 13.0], [7100.0, 11.0], [7300.0, 5.0], [7400.0, 8.0], [7200.0, 6.0], [7600.0, 8.0], [7500.0, 11.0], [7800.0, 12.0], [7900.0, 6.0], [7700.0, 18.0], [8000.0, 13.0], [8100.0, 13.0], [8300.0, 7.0], [8500.0, 7.0], [8600.0, 9.0], [8400.0, 11.0], [8700.0, 5.0], [8200.0, 2.0], [8900.0, 10.0], [9100.0, 6.0], [8800.0, 5.0], [9200.0, 7.0], [9000.0, 3.0], [9700.0, 3.0], [9300.0, 1.0], [9600.0, 3.0], [9400.0, 5.0], [9500.0, 3.0], [9800.0, 7.0], [10200.0, 3.0], [9900.0, 4.0], [10100.0, 5.0], [10000.0, 2.0], [10400.0, 4.0], [10700.0, 5.0], [10500.0, 3.0], [10600.0, 2.0], [10300.0, 3.0], [11100.0, 1.0], [11000.0, 1.0], [10800.0, 1.0], [10900.0, 1.0], [11500.0, 1.0], [11300.0, 4.0], [11600.0, 1.0], [12000.0, 1.0], [12100.0, 3.0], [11900.0, 2.0], [11800.0, 1.0], [12400.0, 1.0], [12300.0, 5.0], [12700.0, 2.0], [12600.0, 3.0], [13000.0, 3.0], [12800.0, 1.0], [13300.0, 1.0], [13500.0, 1.0], [13400.0, 1.0], [13900.0, 3.0], [14100.0, 1.0], [14300.0, 1.0], [14000.0, 1.0], [14600.0, 1.0], [14800.0, 1.0], [15000.0, 1.0], [14900.0, 1.0], [15200.0, 1.0], [15400.0, 1.0], [15600.0, 1.0], [16100.0, 1.0], [16200.0, 1.0], [16300.0, 1.0], [16400.0, 1.0], [16700.0, 1.0], [17700.0, 2.0], [18500.0, 1.0], [18800.0, 1.0], [20000.0, 1.0], [20500.0, 1.0], [22400.0, 1.0], [22700.0, 1.0], [29800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 39700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 27.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9152.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 27.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 821.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 9152.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 93.25563909774442, "minX": 1.74903834E12, "maxY": 94.07762991128007, "series": [{"data": [[1.7490384E12, 94.07762991128007], [1.74903834E12, 93.25563909774442]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7490384E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 66.0, "minX": 1.0, "maxY": 2081.0, "series": [{"data": [[2.0, 68.41176470588235], [3.0, 67.0], [4.0, 70.46153846153845], [5.0, 70.0], [6.0, 70.50000000000001], [7.0, 72.5], [8.0, 75.78571428571429], [9.0, 71.0], [10.0, 79.0], [11.0, 76.26315789473684], [12.0, 75.0], [13.0, 71.0], [14.0, 76.0], [15.0, 81.2], [16.0, 84.73333333333333], [17.0, 91.375], [18.0, 95.10000000000001], [19.0, 97.80000000000001], [20.0, 290.0833333333333], [21.0, 145.41860465116278], [22.0, 118.0], [23.0, 107.16666666666667], [24.0, 181.28571428571428], [25.0, 384.2962962962963], [26.0, 134.66666666666663], [27.0, 644.0], [28.0, 1626.0], [29.0, 329.2857142857143], [30.0, 93.0], [31.0, 93.14285714285714], [33.0, 112.75], [32.0, 106.0], [34.0, 278.6], [35.0, 121.54545454545455], [37.0, 607.5], [36.0, 119.0], [38.0, 234.58823529411768], [39.0, 100.3103448275862], [41.0, 198.91666666666666], [40.0, 104.6], [43.0, 302.69565217391306], [42.0, 107.9090909090909], [45.0, 244.28571428571425], [44.0, 96.6], [46.0, 1330.0], [47.0, 436.44444444444446], [49.0, 275.15625], [48.0, 90.42857142857142], [50.0, 285.72727272727275], [51.0, 1372.6], [52.0, 1465.0], [53.0, 115.99999999999999], [54.0, 193.42857142857144], [55.0, 110.83333333333334], [56.0, 360.3571428571429], [57.0, 580.5], [58.0, 1216.75], [59.0, 1620.5], [60.0, 345.42857142857144], [61.0, 111.24999999999999], [63.0, 296.5714285714286], [62.0, 106.85714285714285], [64.0, 285.8666666666667], [66.0, 1164.3333333333333], [67.0, 117.66666666666667], [65.0, 119.0], [68.0, 2081.0], [69.0, 459.0], [71.0, 316.3333333333333], [70.0, 115.2], [72.0, 1031.2], [75.0, 1252.0000000000002], [74.0, 121.81818181818184], [73.0, 120.25], [76.0, 323.71428571428567], [78.0, 251.68750000000003], [79.0, 1216.3333333333335], [77.0, 127.0], [80.0, 388.8235294117647], [81.0, 223.9777777777778], [83.0, 132.28571428571428], [82.0, 130.04545454545453], [85.0, 250.13636363636365], [86.0, 946.7142857142858], [87.0, 1206.6666666666667], [84.0, 126.99999999999999], [88.0, 699.5714285714287], [89.0, 490.970588235294], [91.0, 138.2], [90.0, 141.2], [93.0, 336.89473684210526], [94.0, 775.8823529411765], [95.0, 258.98076923076917], [92.0, 143.0], [99.0, 154.2345132743362], [98.0, 143.8496732026144], [97.0, 150.85227272727272], [96.0, 146.07042253521126], [100.0, 773.8668127587066], [1.0, 66.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[94.03389999999965, 676.731699999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1010.8, "minX": 1.74903834E12, "maxY": 1.0984247116666667E7, "series": [{"data": [[1.7490384E12, 7965737.066666666], [1.74903834E12, 1.0984247116666667E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7490384E12, 17989.2], [1.74903834E12, 1010.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7490384E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 377.1875792141962, "minX": 1.74903834E12, "maxY": 6007.7161654135325, "series": [{"data": [[1.7490384E12, 377.1875792141962], [1.74903834E12, 6007.7161654135325]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7490384E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 155.46778622729116, "minX": 1.74903834E12, "maxY": 305.3045112781953, "series": [{"data": [[1.7490384E12, 155.46778622729116], [1.74903834E12, 305.3045112781953]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7490384E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 49.896616541353424, "minX": 1.74903834E12, "maxY": 89.17765103506547, "series": [{"data": [[1.7490384E12, 89.17765103506547], [1.74903834E12, 49.896616541353424]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7490384E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 714.0, "minX": 1.74903834E12, "maxY": 39712.0, "series": [{"data": [[1.7490384E12, 39712.0], [1.74903834E12, 20076.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7490384E12, 1033.0], [1.74903834E12, 714.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7490384E12, 10177.6], [1.74903834E12, 10166.699999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7490384E12, 22730.169999999995], [1.74903834E12, 15306.569999999985]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7490384E12, 6116.0], [1.74903834E12, 5667.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7490384E12, 13976.149999999998], [1.74903834E12, 12079.699999999997]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7490384E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 66.0, "minX": 1.0, "maxY": 18800.0, "series": [{"data": [[32.0, 5685.0], [36.0, 5985.0], [587.0, 5668.0], [609.0, 15853.5], [611.0, 13488.0], [643.0, 8636.0], [658.0, 6869.0], [679.0, 18800.0], [59.0, 4743.5], [6.0, 4484.0], [110.0, 6560.0], [7.0, 4797.0], [8.0, 1655.0], [9.0, 4377.5], [10.0, 5159.5], [11.0, 6980.0], [12.0, 5387.0], [13.0, 6084.0], [14.0, 5421.5], [15.0, 6393.0], [16.0, 7589.5], [17.0, 5079.5], [18.0, 6349.5], [19.0, 7981.5], [20.0, 4359.5], [21.0, 5512.0], [23.0, 7625.0], [25.0, 5872.5], [26.0, 7127.0], [502.0, 4818.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 101.0], [8.0, 959.5], [546.0, 185.0], [36.0, 147.0], [587.0, 136.0], [609.0, 157.0], [611.0, 158.0], [643.0, 139.0], [658.0, 144.0], [665.0, 145.0], [654.0, 153.0], [679.0, 145.0], [676.0, 145.0], [44.0, 69.0], [220.0, 96.0], [59.0, 106.0], [1.0, 66.0], [19.0, 235.0], [23.0, 151.0], [92.0, 71.0], [26.0, 206.5], [110.0, 256.0], [491.0, 111.0], [502.0, 123.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 679.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 65.0, "minX": 1.0, "maxY": 1376.0, "series": [{"data": [[32.0, 267.0], [36.0, 247.0], [587.0, 246.0], [609.0, 1153.0], [611.0, 1376.0], [643.0, 225.0], [658.0, 964.0], [679.0, 988.0], [59.0, 417.5], [6.0, 209.0], [110.0, 278.0], [7.0, 247.0], [8.0, 161.0], [9.0, 170.0], [10.0, 201.0], [11.0, 300.0], [12.0, 263.5], [13.0, 189.0], [14.0, 222.5], [15.0, 224.0], [16.0, 253.0], [17.0, 257.5], [18.0, 317.5], [19.0, 747.0], [20.0, 231.5], [21.0, 245.5], [23.0, 214.0], [25.0, 183.0], [26.0, 649.0], [502.0, 284.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 101.0], [8.0, 959.0], [546.0, 184.0], [36.0, 147.0], [587.0, 135.0], [609.0, 156.0], [611.0, 157.0], [643.0, 138.0], [658.0, 142.0], [665.0, 144.0], [654.0, 151.0], [679.0, 144.0], [676.0, 144.0], [44.0, 68.0], [220.0, 95.0], [59.0, 96.0], [1.0, 65.0], [19.0, 234.0], [23.0, 151.0], [92.0, 70.0], [26.0, 206.5], [110.0, 220.0], [491.0, 110.0], [502.0, 123.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 679.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 10.533333333333333, "minX": 1.74903834E12, "maxY": 156.13333333333333, "series": [{"data": [[1.7490384E12, 156.13333333333333], [1.74903834E12, 10.533333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7490384E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 5.266666666666667, "minX": 1.74903834E12, "maxY": 152.53333333333333, "series": [{"data": [[1.7490384E12, 5.266666666666667], [1.74903834E12, 8.866666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7490384E12, 152.53333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7490384E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 5.266666666666667, "minX": 1.74903834E12, "maxY": 152.53333333333333, "series": [{"data": [[1.7490384E12, 5.266666666666667], [1.74903834E12, 8.866666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.7490384E12, 152.53333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7490384E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 5.266666666666667, "minX": 1.74903834E12, "maxY": 152.53333333333333, "series": [{"data": [[1.7490384E12, 5.266666666666667], [1.74903834E12, 8.866666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7490384E12, 152.53333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7490384E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

