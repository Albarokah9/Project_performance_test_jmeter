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
        data: {"result": {"minY": 30.0, "minX": 0.0, "maxY": 49597.0, "series": [{"data": [[0.0, 30.0], [0.1, 33.0], [0.2, 33.0], [0.3, 34.0], [0.4, 35.0], [0.5, 35.0], [0.6, 35.0], [0.7, 36.0], [0.8, 36.0], [0.9, 37.0], [1.0, 37.0], [1.1, 37.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 39.0], [1.6, 39.0], [1.7, 40.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 41.0], [2.2, 41.0], [2.3, 42.0], [2.4, 42.0], [2.5, 43.0], [2.6, 43.0], [2.7, 44.0], [2.8, 44.0], [2.9, 45.0], [3.0, 45.0], [3.1, 45.0], [3.2, 46.0], [3.3, 47.0], [3.4, 47.0], [3.5, 48.0], [3.6, 48.0], [3.7, 49.0], [3.8, 49.0], [3.9, 49.0], [4.0, 49.0], [4.1, 49.0], [4.2, 50.0], [4.3, 50.0], [4.4, 50.0], [4.5, 50.0], [4.6, 50.0], [4.7, 50.0], [4.8, 51.0], [4.9, 51.0], [5.0, 51.0], [5.1, 51.0], [5.2, 51.0], [5.3, 51.0], [5.4, 51.0], [5.5, 52.0], [5.6, 52.0], [5.7, 52.0], [5.8, 52.0], [5.9, 52.0], [6.0, 53.0], [6.1, 53.0], [6.2, 53.0], [6.3, 53.0], [6.4, 53.0], [6.5, 53.0], [6.6, 53.0], [6.7, 54.0], [6.8, 54.0], [6.9, 54.0], [7.0, 54.0], [7.1, 54.0], [7.2, 54.0], [7.3, 55.0], [7.4, 55.0], [7.5, 55.0], [7.6, 55.0], [7.7, 55.0], [7.8, 56.0], [7.9, 56.0], [8.0, 56.0], [8.1, 56.0], [8.2, 56.0], [8.3, 57.0], [8.4, 57.0], [8.5, 57.0], [8.6, 57.0], [8.7, 57.0], [8.8, 58.0], [8.9, 58.0], [9.0, 58.0], [9.1, 58.0], [9.2, 59.0], [9.3, 59.0], [9.4, 60.0], [9.5, 60.0], [9.6, 60.0], [9.7, 60.0], [9.8, 60.0], [9.9, 61.0], [10.0, 61.0], [10.1, 62.0], [10.2, 62.0], [10.3, 62.0], [10.4, 63.0], [10.5, 63.0], [10.6, 63.0], [10.7, 64.0], [10.8, 64.0], [10.9, 64.0], [11.0, 65.0], [11.1, 65.0], [11.2, 66.0], [11.3, 66.0], [11.4, 67.0], [11.5, 67.0], [11.6, 67.0], [11.7, 68.0], [11.8, 68.0], [11.9, 68.0], [12.0, 69.0], [12.1, 69.0], [12.2, 70.0], [12.3, 70.0], [12.4, 70.0], [12.5, 71.0], [12.6, 72.0], [12.7, 73.0], [12.8, 73.0], [12.9, 73.0], [13.0, 74.0], [13.1, 74.0], [13.2, 75.0], [13.3, 75.0], [13.4, 76.0], [13.5, 76.0], [13.6, 76.0], [13.7, 77.0], [13.8, 77.0], [13.9, 78.0], [14.0, 78.0], [14.1, 79.0], [14.2, 79.0], [14.3, 79.0], [14.4, 80.0], [14.5, 80.0], [14.6, 80.0], [14.7, 80.0], [14.8, 81.0], [14.9, 81.0], [15.0, 82.0], [15.1, 82.0], [15.2, 82.0], [15.3, 83.0], [15.4, 83.0], [15.5, 83.0], [15.6, 84.0], [15.7, 84.0], [15.8, 85.0], [15.9, 85.0], [16.0, 85.0], [16.1, 86.0], [16.2, 86.0], [16.3, 86.0], [16.4, 87.0], [16.5, 87.0], [16.6, 88.0], [16.7, 88.0], [16.8, 88.0], [16.9, 89.0], [17.0, 89.0], [17.1, 90.0], [17.2, 90.0], [17.3, 90.0], [17.4, 91.0], [17.5, 91.0], [17.6, 92.0], [17.7, 92.0], [17.8, 93.0], [17.9, 93.0], [18.0, 94.0], [18.1, 94.0], [18.2, 94.0], [18.3, 95.0], [18.4, 95.0], [18.5, 96.0], [18.6, 96.0], [18.7, 96.0], [18.8, 97.0], [18.9, 97.0], [19.0, 98.0], [19.1, 98.0], [19.2, 98.0], [19.3, 99.0], [19.4, 99.0], [19.5, 100.0], [19.6, 100.0], [19.7, 100.0], [19.8, 101.0], [19.9, 101.0], [20.0, 101.0], [20.1, 101.0], [20.2, 102.0], [20.3, 102.0], [20.4, 102.0], [20.5, 103.0], [20.6, 103.0], [20.7, 103.0], [20.8, 104.0], [20.9, 104.0], [21.0, 104.0], [21.1, 105.0], [21.2, 105.0], [21.3, 105.0], [21.4, 106.0], [21.5, 106.0], [21.6, 107.0], [21.7, 107.0], [21.8, 107.0], [21.9, 108.0], [22.0, 108.0], [22.1, 108.0], [22.2, 108.0], [22.3, 109.0], [22.4, 109.0], [22.5, 109.0], [22.6, 109.0], [22.7, 110.0], [22.8, 110.0], [22.9, 110.0], [23.0, 110.0], [23.1, 111.0], [23.2, 111.0], [23.3, 111.0], [23.4, 111.0], [23.5, 112.0], [23.6, 112.0], [23.7, 112.0], [23.8, 113.0], [23.9, 113.0], [24.0, 113.0], [24.1, 113.0], [24.2, 114.0], [24.3, 114.0], [24.4, 114.0], [24.5, 115.0], [24.6, 115.0], [24.7, 115.0], [24.8, 116.0], [24.9, 116.0], [25.0, 116.0], [25.1, 116.0], [25.2, 116.0], [25.3, 117.0], [25.4, 117.0], [25.5, 117.0], [25.6, 117.0], [25.7, 118.0], [25.8, 118.0], [25.9, 118.0], [26.0, 119.0], [26.1, 119.0], [26.2, 119.0], [26.3, 119.0], [26.4, 119.0], [26.5, 120.0], [26.6, 120.0], [26.7, 120.0], [26.8, 121.0], [26.9, 121.0], [27.0, 121.0], [27.1, 121.0], [27.2, 122.0], [27.3, 122.0], [27.4, 122.0], [27.5, 122.0], [27.6, 123.0], [27.7, 123.0], [27.8, 123.0], [27.9, 124.0], [28.0, 124.0], [28.1, 124.0], [28.2, 124.0], [28.3, 124.0], [28.4, 125.0], [28.5, 125.0], [28.6, 125.0], [28.7, 126.0], [28.8, 126.0], [28.9, 126.0], [29.0, 126.0], [29.1, 127.0], [29.2, 127.0], [29.3, 127.0], [29.4, 127.0], [29.5, 127.0], [29.6, 127.0], [29.7, 128.0], [29.8, 128.0], [29.9, 128.0], [30.0, 128.0], [30.1, 128.0], [30.2, 129.0], [30.3, 129.0], [30.4, 129.0], [30.5, 129.0], [30.6, 130.0], [30.7, 130.0], [30.8, 130.0], [30.9, 130.0], [31.0, 131.0], [31.1, 131.0], [31.2, 131.0], [31.3, 131.0], [31.4, 131.0], [31.5, 132.0], [31.6, 132.0], [31.7, 132.0], [31.8, 133.0], [31.9, 133.0], [32.0, 133.0], [32.1, 133.0], [32.2, 134.0], [32.3, 134.0], [32.4, 134.0], [32.5, 134.0], [32.6, 135.0], [32.7, 135.0], [32.8, 135.0], [32.9, 135.0], [33.0, 135.0], [33.1, 135.0], [33.2, 136.0], [33.3, 136.0], [33.4, 136.0], [33.5, 137.0], [33.6, 137.0], [33.7, 137.0], [33.8, 137.0], [33.9, 137.0], [34.0, 137.0], [34.1, 138.0], [34.2, 138.0], [34.3, 138.0], [34.4, 138.0], [34.5, 138.0], [34.6, 139.0], [34.7, 139.0], [34.8, 139.0], [34.9, 139.0], [35.0, 139.0], [35.1, 140.0], [35.2, 140.0], [35.3, 140.0], [35.4, 140.0], [35.5, 140.0], [35.6, 141.0], [35.7, 141.0], [35.8, 141.0], [35.9, 141.0], [36.0, 142.0], [36.1, 142.0], [36.2, 142.0], [36.3, 142.0], [36.4, 142.0], [36.5, 143.0], [36.6, 143.0], [36.7, 143.0], [36.8, 143.0], [36.9, 143.0], [37.0, 144.0], [37.1, 144.0], [37.2, 144.0], [37.3, 144.0], [37.4, 145.0], [37.5, 145.0], [37.6, 145.0], [37.7, 145.0], [37.8, 146.0], [37.9, 146.0], [38.0, 146.0], [38.1, 146.0], [38.2, 147.0], [38.3, 147.0], [38.4, 147.0], [38.5, 147.0], [38.6, 148.0], [38.7, 148.0], [38.8, 148.0], [38.9, 148.0], [39.0, 148.0], [39.1, 149.0], [39.2, 149.0], [39.3, 149.0], [39.4, 149.0], [39.5, 150.0], [39.6, 150.0], [39.7, 150.0], [39.8, 150.0], [39.9, 151.0], [40.0, 151.0], [40.1, 151.0], [40.2, 151.0], [40.3, 152.0], [40.4, 152.0], [40.5, 152.0], [40.6, 152.0], [40.7, 152.0], [40.8, 153.0], [40.9, 153.0], [41.0, 153.0], [41.1, 153.0], [41.2, 153.0], [41.3, 154.0], [41.4, 154.0], [41.5, 154.0], [41.6, 154.0], [41.7, 154.0], [41.8, 155.0], [41.9, 155.0], [42.0, 155.0], [42.1, 155.0], [42.2, 155.0], [42.3, 155.0], [42.4, 156.0], [42.5, 156.0], [42.6, 156.0], [42.7, 156.0], [42.8, 156.0], [42.9, 156.0], [43.0, 157.0], [43.1, 157.0], [43.2, 157.0], [43.3, 157.0], [43.4, 157.0], [43.5, 158.0], [43.6, 158.0], [43.7, 158.0], [43.8, 158.0], [43.9, 158.0], [44.0, 159.0], [44.1, 159.0], [44.2, 159.0], [44.3, 159.0], [44.4, 159.0], [44.5, 160.0], [44.6, 160.0], [44.7, 160.0], [44.8, 160.0], [44.9, 160.0], [45.0, 161.0], [45.1, 161.0], [45.2, 161.0], [45.3, 161.0], [45.4, 162.0], [45.5, 162.0], [45.6, 162.0], [45.7, 162.0], [45.8, 162.0], [45.9, 163.0], [46.0, 163.0], [46.1, 163.0], [46.2, 163.0], [46.3, 163.0], [46.4, 163.0], [46.5, 164.0], [46.6, 164.0], [46.7, 164.0], [46.8, 164.0], [46.9, 164.0], [47.0, 165.0], [47.1, 165.0], [47.2, 165.0], [47.3, 165.0], [47.4, 165.0], [47.5, 166.0], [47.6, 166.0], [47.7, 166.0], [47.8, 166.0], [47.9, 166.0], [48.0, 167.0], [48.1, 167.0], [48.2, 167.0], [48.3, 167.0], [48.4, 167.0], [48.5, 168.0], [48.6, 168.0], [48.7, 168.0], [48.8, 168.0], [48.9, 168.0], [49.0, 169.0], [49.1, 169.0], [49.2, 169.0], [49.3, 169.0], [49.4, 170.0], [49.5, 170.0], [49.6, 170.0], [49.7, 170.0], [49.8, 170.0], [49.9, 171.0], [50.0, 171.0], [50.1, 171.0], [50.2, 172.0], [50.3, 172.0], [50.4, 172.0], [50.5, 172.0], [50.6, 173.0], [50.7, 173.0], [50.8, 173.0], [50.9, 173.0], [51.0, 174.0], [51.1, 174.0], [51.2, 174.0], [51.3, 174.0], [51.4, 175.0], [51.5, 175.0], [51.6, 175.0], [51.7, 175.0], [51.8, 175.0], [51.9, 176.0], [52.0, 176.0], [52.1, 176.0], [52.2, 176.0], [52.3, 177.0], [52.4, 177.0], [52.5, 177.0], [52.6, 178.0], [52.7, 178.0], [52.8, 178.0], [52.9, 178.0], [53.0, 178.0], [53.1, 178.0], [53.2, 179.0], [53.3, 179.0], [53.4, 179.0], [53.5, 180.0], [53.6, 180.0], [53.7, 180.0], [53.8, 180.0], [53.9, 181.0], [54.0, 181.0], [54.1, 181.0], [54.2, 181.0], [54.3, 181.0], [54.4, 182.0], [54.5, 182.0], [54.6, 182.0], [54.7, 183.0], [54.8, 183.0], [54.9, 183.0], [55.0, 183.0], [55.1, 184.0], [55.2, 184.0], [55.3, 184.0], [55.4, 184.0], [55.5, 184.0], [55.6, 185.0], [55.7, 185.0], [55.8, 185.0], [55.9, 185.0], [56.0, 185.0], [56.1, 186.0], [56.2, 186.0], [56.3, 186.0], [56.4, 186.0], [56.5, 187.0], [56.6, 187.0], [56.7, 187.0], [56.8, 187.0], [56.9, 188.0], [57.0, 188.0], [57.1, 188.0], [57.2, 188.0], [57.3, 189.0], [57.4, 189.0], [57.5, 189.0], [57.6, 190.0], [57.7, 190.0], [57.8, 190.0], [57.9, 190.0], [58.0, 191.0], [58.1, 191.0], [58.2, 191.0], [58.3, 191.0], [58.4, 192.0], [58.5, 192.0], [58.6, 192.0], [58.7, 192.0], [58.8, 193.0], [58.9, 193.0], [59.0, 193.0], [59.1, 193.0], [59.2, 193.0], [59.3, 194.0], [59.4, 194.0], [59.5, 194.0], [59.6, 195.0], [59.7, 195.0], [59.8, 195.0], [59.9, 195.0], [60.0, 196.0], [60.1, 196.0], [60.2, 196.0], [60.3, 196.0], [60.4, 196.0], [60.5, 197.0], [60.6, 197.0], [60.7, 197.0], [60.8, 197.0], [60.9, 197.0], [61.0, 198.0], [61.1, 198.0], [61.2, 198.0], [61.3, 198.0], [61.4, 199.0], [61.5, 199.0], [61.6, 199.0], [61.7, 199.0], [61.8, 199.0], [61.9, 200.0], [62.0, 200.0], [62.1, 200.0], [62.2, 200.0], [62.3, 201.0], [62.4, 201.0], [62.5, 201.0], [62.6, 201.0], [62.7, 201.0], [62.8, 202.0], [62.9, 202.0], [63.0, 202.0], [63.1, 202.0], [63.2, 203.0], [63.3, 203.0], [63.4, 203.0], [63.5, 203.0], [63.6, 204.0], [63.7, 204.0], [63.8, 204.0], [63.9, 204.0], [64.0, 204.0], [64.1, 205.0], [64.2, 205.0], [64.3, 205.0], [64.4, 205.0], [64.5, 206.0], [64.6, 206.0], [64.7, 206.0], [64.8, 207.0], [64.9, 207.0], [65.0, 207.0], [65.1, 207.0], [65.2, 207.0], [65.3, 208.0], [65.4, 208.0], [65.5, 208.0], [65.6, 208.0], [65.7, 208.0], [65.8, 209.0], [65.9, 209.0], [66.0, 209.0], [66.1, 210.0], [66.2, 210.0], [66.3, 210.0], [66.4, 210.0], [66.5, 211.0], [66.6, 211.0], [66.7, 211.0], [66.8, 211.0], [66.9, 211.0], [67.0, 211.0], [67.1, 212.0], [67.2, 212.0], [67.3, 212.0], [67.4, 212.0], [67.5, 213.0], [67.6, 213.0], [67.7, 213.0], [67.8, 213.0], [67.9, 214.0], [68.0, 214.0], [68.1, 214.0], [68.2, 215.0], [68.3, 215.0], [68.4, 215.0], [68.5, 215.0], [68.6, 216.0], [68.7, 216.0], [68.8, 216.0], [68.9, 216.0], [69.0, 217.0], [69.1, 217.0], [69.2, 218.0], [69.3, 218.0], [69.4, 218.0], [69.5, 218.0], [69.6, 219.0], [69.7, 219.0], [69.8, 219.0], [69.9, 220.0], [70.0, 220.0], [70.1, 220.0], [70.2, 220.0], [70.3, 221.0], [70.4, 221.0], [70.5, 221.0], [70.6, 222.0], [70.7, 222.0], [70.8, 222.0], [70.9, 223.0], [71.0, 223.0], [71.1, 223.0], [71.2, 223.0], [71.3, 224.0], [71.4, 224.0], [71.5, 225.0], [71.6, 225.0], [71.7, 225.0], [71.8, 225.0], [71.9, 226.0], [72.0, 226.0], [72.1, 226.0], [72.2, 227.0], [72.3, 227.0], [72.4, 228.0], [72.5, 228.0], [72.6, 228.0], [72.7, 229.0], [72.8, 229.0], [72.9, 229.0], [73.0, 230.0], [73.1, 230.0], [73.2, 230.0], [73.3, 231.0], [73.4, 231.0], [73.5, 231.0], [73.6, 232.0], [73.7, 232.0], [73.8, 232.0], [73.9, 232.0], [74.0, 233.0], [74.1, 234.0], [74.2, 234.0], [74.3, 234.0], [74.4, 235.0], [74.5, 235.0], [74.6, 235.0], [74.7, 236.0], [74.8, 236.0], [74.9, 237.0], [75.0, 237.0], [75.1, 238.0], [75.2, 238.0], [75.3, 238.0], [75.4, 238.0], [75.5, 239.0], [75.6, 239.0], [75.7, 240.0], [75.8, 240.0], [75.9, 241.0], [76.0, 241.0], [76.1, 241.0], [76.2, 242.0], [76.3, 243.0], [76.4, 243.0], [76.5, 243.0], [76.6, 244.0], [76.7, 245.0], [76.8, 245.0], [76.9, 246.0], [77.0, 246.0], [77.1, 247.0], [77.2, 247.0], [77.3, 248.0], [77.4, 248.0], [77.5, 249.0], [77.6, 250.0], [77.7, 250.0], [77.8, 251.0], [77.9, 252.0], [78.0, 253.0], [78.1, 253.0], [78.2, 254.0], [78.3, 254.0], [78.4, 255.0], [78.5, 256.0], [78.6, 256.0], [78.7, 257.0], [78.8, 257.0], [78.9, 258.0], [79.0, 258.0], [79.1, 259.0], [79.2, 259.0], [79.3, 260.0], [79.4, 261.0], [79.5, 262.0], [79.6, 263.0], [79.7, 263.0], [79.8, 263.0], [79.9, 264.0], [80.0, 265.0], [80.1, 265.0], [80.2, 266.0], [80.3, 267.0], [80.4, 268.0], [80.5, 268.0], [80.6, 269.0], [80.7, 270.0], [80.8, 271.0], [80.9, 272.0], [81.0, 273.0], [81.1, 274.0], [81.2, 274.0], [81.3, 275.0], [81.4, 276.0], [81.5, 277.0], [81.6, 278.0], [81.7, 279.0], [81.8, 281.0], [81.9, 282.0], [82.0, 283.0], [82.1, 285.0], [82.2, 287.0], [82.3, 288.0], [82.4, 289.0], [82.5, 290.0], [82.6, 290.0], [82.7, 292.0], [82.8, 292.0], [82.9, 293.0], [83.0, 295.0], [83.1, 297.0], [83.2, 299.0], [83.3, 300.0], [83.4, 301.0], [83.5, 302.0], [83.6, 304.0], [83.7, 306.0], [83.8, 308.0], [83.9, 309.0], [84.0, 312.0], [84.1, 314.0], [84.2, 315.0], [84.3, 316.0], [84.4, 317.0], [84.5, 319.0], [84.6, 321.0], [84.7, 325.0], [84.8, 328.0], [84.9, 329.0], [85.0, 331.0], [85.1, 334.0], [85.2, 336.0], [85.3, 338.0], [85.4, 340.0], [85.5, 343.0], [85.6, 347.0], [85.7, 350.0], [85.8, 355.0], [85.9, 361.0], [86.0, 363.0], [86.1, 366.0], [86.2, 370.0], [86.3, 374.0], [86.4, 376.0], [86.5, 380.0], [86.6, 383.0], [86.7, 385.0], [86.8, 389.0], [86.9, 391.0], [87.0, 395.0], [87.1, 396.0], [87.2, 398.0], [87.3, 400.0], [87.4, 402.0], [87.5, 404.0], [87.6, 407.0], [87.7, 410.0], [87.8, 415.0], [87.9, 416.0], [88.0, 419.0], [88.1, 421.0], [88.2, 424.0], [88.3, 426.0], [88.4, 428.0], [88.5, 430.0], [88.6, 432.0], [88.7, 434.0], [88.8, 436.0], [88.9, 438.0], [89.0, 439.0], [89.1, 443.0], [89.2, 445.0], [89.3, 447.0], [89.4, 449.0], [89.5, 451.0], [89.6, 454.0], [89.7, 455.0], [89.8, 457.0], [89.9, 459.0], [90.0, 461.0], [90.1, 462.0], [90.2, 463.0], [90.3, 465.0], [90.4, 468.0], [90.5, 469.0], [90.6, 470.0], [90.7, 471.0], [90.8, 472.0], [90.9, 475.0], [91.0, 476.0], [91.1, 480.0], [91.2, 481.0], [91.3, 485.0], [91.4, 487.0], [91.5, 490.0], [91.6, 493.0], [91.7, 497.0], [91.8, 499.0], [91.9, 502.0], [92.0, 503.0], [92.1, 505.0], [92.2, 508.0], [92.3, 511.0], [92.4, 515.0], [92.5, 518.0], [92.6, 523.0], [92.7, 525.0], [92.8, 528.0], [92.9, 531.0], [93.0, 534.0], [93.1, 537.0], [93.2, 540.0], [93.3, 548.0], [93.4, 554.0], [93.5, 559.0], [93.6, 564.0], [93.7, 568.0], [93.8, 575.0], [93.9, 585.0], [94.0, 592.0], [94.1, 605.0], [94.2, 614.0], [94.3, 619.0], [94.4, 630.0], [94.5, 640.0], [94.6, 652.0], [94.7, 677.0], [94.8, 719.0], [94.9, 744.0], [95.0, 760.0], [95.1, 789.0], [95.2, 821.0], [95.3, 842.0], [95.4, 857.0], [95.5, 869.0], [95.6, 878.0], [95.7, 891.0], [95.8, 906.0], [95.9, 913.0], [96.0, 923.0], [96.1, 932.0], [96.2, 940.0], [96.3, 953.0], [96.4, 963.0], [96.5, 975.0], [96.6, 994.0], [96.7, 1015.0], [96.8, 1037.0], [96.9, 1051.0], [97.0, 1066.0], [97.1, 1091.0], [97.2, 1129.0], [97.3, 1157.0], [97.4, 1224.0], [97.5, 1340.0], [97.6, 1518.0], [97.7, 1765.0], [97.8, 1873.0], [97.9, 1946.0], [98.0, 2045.0], [98.1, 2577.0], [98.2, 3813.0], [98.3, 4840.0], [98.4, 6111.0], [98.5, 6516.0], [98.6, 6823.0], [98.7, 7230.0], [98.8, 7760.0], [98.9, 8815.0], [99.0, 10553.0], [99.1, 14713.0], [99.2, 16842.0], [99.3, 22426.0], [99.4, 26442.0], [99.5, 28655.0], [99.6, 30330.0], [99.7, 31869.0], [99.8, 34202.0], [99.9, 40253.0], [100.0, 49597.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4239.0, "series": [{"data": [[0.0, 1944.0], [100.0, 4239.0], [33900.0, 3.0], [34500.0, 1.0], [34300.0, 1.0], [34100.0, 1.0], [39300.0, 1.0], [40700.0, 1.0], [44700.0, 1.0], [43100.0, 1.0], [45500.0, 2.0], [49500.0, 1.0], [200.0, 2144.0], [300.0, 400.0], [400.0, 454.0], [500.0, 224.0], [600.0, 70.0], [700.0, 38.0], [800.0, 63.0], [900.0, 84.0], [1000.0, 51.0], [1100.0, 24.0], [1200.0, 11.0], [1300.0, 6.0], [1400.0, 7.0], [1500.0, 6.0], [1600.0, 2.0], [1700.0, 4.0], [1800.0, 11.0], [1900.0, 13.0], [2000.0, 9.0], [2100.0, 1.0], [2200.0, 1.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 1.0], [3000.0, 1.0], [3200.0, 1.0], [3400.0, 1.0], [3500.0, 1.0], [3700.0, 1.0], [3600.0, 2.0], [3800.0, 3.0], [4000.0, 2.0], [4300.0, 2.0], [4200.0, 1.0], [4400.0, 2.0], [4800.0, 1.0], [5100.0, 2.0], [5600.0, 2.0], [5700.0, 2.0], [5900.0, 2.0], [6000.0, 1.0], [6100.0, 1.0], [6300.0, 3.0], [6200.0, 3.0], [6400.0, 3.0], [6500.0, 3.0], [6600.0, 2.0], [6800.0, 4.0], [6700.0, 3.0], [6900.0, 3.0], [7000.0, 3.0], [7100.0, 1.0], [7200.0, 4.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 5.0], [7700.0, 2.0], [8400.0, 2.0], [8300.0, 2.0], [8500.0, 4.0], [8900.0, 2.0], [8800.0, 1.0], [9600.0, 1.0], [9400.0, 1.0], [10100.0, 1.0], [10200.0, 1.0], [9900.0, 1.0], [10500.0, 3.0], [10400.0, 1.0], [10600.0, 1.0], [10900.0, 1.0], [11700.0, 1.0], [13000.0, 1.0], [14200.0, 3.0], [14600.0, 1.0], [14700.0, 1.0], [14900.0, 1.0], [15300.0, 1.0], [15800.0, 1.0], [15500.0, 3.0], [15400.0, 2.0], [16000.0, 1.0], [17300.0, 1.0], [16900.0, 1.0], [16800.0, 1.0], [17600.0, 1.0], [18200.0, 1.0], [21500.0, 1.0], [20600.0, 1.0], [21800.0, 2.0], [22400.0, 1.0], [22300.0, 1.0], [24200.0, 1.0], [23700.0, 1.0], [23600.0, 1.0], [23800.0, 1.0], [24800.0, 1.0], [25300.0, 1.0], [24600.0, 1.0], [26500.0, 1.0], [25800.0, 1.0], [26200.0, 1.0], [26400.0, 1.0], [27500.0, 2.0], [26800.0, 1.0], [27300.0, 1.0], [26900.0, 1.0], [28600.0, 1.0], [28400.0, 2.0], [27900.0, 1.0], [28700.0, 1.0], [29200.0, 1.0], [29300.0, 1.0], [29800.0, 1.0], [29900.0, 2.0], [30000.0, 1.0], [30300.0, 3.0], [30400.0, 1.0], [30200.0, 1.0], [31500.0, 3.0], [31200.0, 2.0], [31400.0, 1.0], [31000.0, 1.0], [31900.0, 1.0], [32200.0, 1.0], [31800.0, 1.0], [32400.0, 1.0], [32100.0, 1.0], [34400.0, 1.0], [34200.0, 1.0], [33600.0, 1.0], [35600.0, 1.0], [36400.0, 1.0], [36200.0, 1.0], [38600.0, 1.0], [38400.0, 1.0], [40200.0, 2.0], [43600.0, 1.0], [47000.0, 1.0], [46800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 49500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 241.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9186.0, "series": [{"data": [[0.0, 9186.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 573.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 241.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 42.32551928783379, "minX": 1.7489298E12, "maxY": 80.8049773755653, "series": [{"data": [[1.74892986E12, 42.32551928783379], [1.7489298E12, 80.8049773755653]], "isOverall": false, "label": "https://voila.id/", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74892986E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 34.53125000000001, "minX": 1.0, "maxY": 5357.4375, "series": [{"data": [[2.0, 42.53333333333333], [3.0, 47.11764705882353], [4.0, 1624.9107142857142], [5.0, 52.13888888888889], [6.0, 51.813953488372086], [7.0, 52.04545454545454], [8.0, 57.111111111111114], [9.0, 1270.0545454545459], [10.0, 51.00000000000002], [11.0, 1633.0555555555554], [12.0, 55.555555555555564], [13.0, 426.05714285714276], [14.0, 46.916666666666664], [15.0, 46.67924528301888], [16.0, 48.173913043478265], [17.0, 52.59090909090909], [18.0, 52.55], [19.0, 55.2], [20.0, 1708.4871794871801], [21.0, 5357.4375], [22.0, 2414.0], [23.0, 36.66666666666667], [24.0, 44.58333333333333], [25.0, 532.7222222222222], [26.0, 566.9285714285714], [27.0, 53.33333333333333], [28.0, 2242.7185628742523], [29.0, 150.99999999999997], [30.0, 149.23809523809524], [31.0, 208.62142857142854], [33.0, 357.923076923077], [32.0, 133.6071428571428], [35.0, 226.8644067796611], [34.0, 156.67142857142855], [36.0, 201.0909090909091], [39.0, 200.14999999999998], [38.0, 228.33333333333334], [41.0, 483.8], [40.0, 286.1764705882353], [42.0, 325.76315789473676], [43.0, 170.75], [45.0, 203.89999999999998], [44.0, 300.0], [47.0, 522.1428571428571], [46.0, 234.3653846153846], [49.0, 294.53125], [48.0, 191.16666666666666], [51.0, 211.36363636363635], [50.0, 246.3760330578513], [53.0, 296.30769230769243], [52.0, 256.4166666666667], [55.0, 340.4117647058824], [54.0, 340.42857142857156], [57.0, 355.0227272727273], [56.0, 338.99122807017517], [58.0, 454.37142857142857], [59.0, 2456.0], [61.0, 570.6666666666665], [60.0, 411.4385964912281], [63.0, 372.00420168067234], [62.0, 335.42817679558016], [67.0, 514.5353535353532], [66.0, 438.5233160621764], [65.0, 332.15306122448965], [64.0, 841.9405940594061], [70.0, 245.65625000000006], [71.0, 1677.666666666667], [69.0, 90.0], [68.0, 1023.2840095465388], [72.0, 3401.5], [74.0, 197.93749999999997], [75.0, 61.10526315789474], [73.0, 55.0], [76.0, 241.08571428571423], [79.0, 79.29268292682924], [78.0, 71.88], [77.0, 69.45945945945947], [83.0, 96.25], [82.0, 92.48], [81.0, 82.06410256410254], [80.0, 76.62500000000001], [86.0, 617.421052631579], [87.0, 101.1791044776119], [85.0, 100.9090909090909], [84.0, 95.8314606741573], [88.0, 331.8666666666666], [89.0, 100.64], [90.0, 236.28070175438603], [91.0, 110.9811320754717], [92.0, 57.222222222222214], [93.0, 94.63157894736842], [94.0, 117.39062499999999], [95.0, 148.81481481481478], [96.0, 131.07142857142858], [97.0, 177.21951219512198], [98.0, 163.68987341772151], [99.0, 161.44723618090447], [100.0, 238.65312131919913], [1.0, 34.53125000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[67.83739999999949, 550.8034000000017]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 6178.333333333333, "minX": 1.7489298E12, "maxY": 1.345945955E7, "series": [{"data": [[1.74892986E12, 7076371.05], [1.7489298E12, 1.345945955E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74892986E12, 6178.333333333333], [1.7489298E12, 12155.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74892986E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 476.27121661721014, "minX": 1.7489298E12, "maxY": 588.6877828054292, "series": [{"data": [[1.74892986E12, 476.27121661721014], [1.7489298E12, 588.6877828054292]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74892986E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 270.1228486646885, "minX": 1.7489298E12, "maxY": 398.39758672699963, "series": [{"data": [[1.74892986E12, 270.1228486646885], [1.7489298E12, 398.39758672699963]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74892986E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8086053412462912, "minX": 1.7489298E12, "maxY": 1.8084464555052868, "series": [{"data": [[1.74892986E12, 0.8086053412462912], [1.7489298E12, 1.8084464555052868]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74892986E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.7489298E12, "maxY": 49597.0, "series": [{"data": [[1.74892986E12, 49597.0], [1.7489298E12, 47001.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74892986E12, 30.0], [1.7489298E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74892986E12, 472.0], [1.7489298E12, 454.90000000000055]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74892986E12, 8571.699999999999], [1.7489298E12, 23671.61999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74892986E12, 174.0], [1.7489298E12, 170.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74892986E12, 929.0], [1.7489298E12, 640.8999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74892986E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 34.0, "minX": 1.0, "maxY": 26442.0, "series": [{"data": [[2.0, 4976.0], [3.0, 5813.0], [5.0, 8553.0], [6.0, 696.0], [8.0, 6771.5], [9.0, 60.0], [10.0, 13511.5], [11.0, 50.0], [16.0, 52.0], [18.0, 57.5], [21.0, 51.0], [30.0, 58.0], [31.0, 34.0], [35.0, 52.0], [38.0, 51.5], [41.0, 43.0], [44.0, 559.0], [48.0, 54.0], [54.0, 53.0], [59.0, 52.0], [62.0, 56.5], [72.0, 51.0], [78.0, 544.0], [92.0, 44.0], [96.0, 58.0], [112.0, 61.0], [119.0, 134.0], [133.0, 95.0], [137.0, 166.0], [143.0, 175.5], [144.0, 145.5], [145.0, 75.0], [151.0, 108.0], [158.0, 123.0], [156.0, 235.0], [154.0, 226.5], [157.0, 265.0], [166.0, 162.0], [165.0, 224.0], [162.0, 234.0], [161.0, 228.0], [167.0, 135.0], [169.0, 163.5], [171.0, 154.0], [174.0, 191.0], [170.0, 164.0], [172.0, 116.0], [168.0, 140.0], [175.0, 225.0], [173.0, 167.0], [177.0, 138.0], [176.0, 120.5], [181.0, 174.5], [178.0, 186.5], [183.0, 264.0], [179.0, 181.0], [194.0, 141.5], [1.0, 26442.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 194.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 31.0, "minX": 1.0, "maxY": 8586.0, "series": [{"data": [[2.0, 2867.5], [3.0, 5197.0], [5.0, 7998.0], [6.0, 683.5], [8.0, 6337.5], [9.0, 41.0], [10.0, 6701.5], [11.0, 40.0], [16.0, 36.0], [18.0, 33.0], [21.0, 34.0], [30.0, 36.0], [31.0, 31.0], [35.0, 33.0], [38.0, 35.0], [41.0, 34.0], [44.0, 288.0], [48.0, 36.5], [54.0, 33.5], [59.0, 35.0], [62.0, 33.0], [72.0, 35.0], [78.0, 320.5], [92.0, 34.0], [96.0, 38.0], [112.0, 35.0], [119.0, 48.0], [133.0, 46.0], [137.0, 52.0], [143.0, 55.0], [144.0, 48.0], [145.0, 39.0], [151.0, 52.0], [158.0, 66.0], [156.0, 82.0], [154.0, 87.0], [157.0, 91.0], [166.0, 54.0], [165.0, 84.0], [162.0, 84.0], [161.0, 84.0], [167.0, 46.0], [169.0, 55.5], [171.0, 57.0], [174.0, 58.0], [170.0, 80.5], [172.0, 47.0], [168.0, 51.0], [175.0, 83.0], [173.0, 53.0], [177.0, 52.0], [176.0, 50.0], [181.0, 56.0], [178.0, 55.0], [183.0, 92.0], [179.0, 66.0], [194.0, 51.0], [1.0, 8586.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 194.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 55.06666666666667, "minX": 1.7489298E12, "maxY": 111.6, "series": [{"data": [[1.74892986E12, 55.06666666666667], [1.7489298E12, 111.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74892986E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 56.166666666666664, "minX": 1.7489298E12, "maxY": 110.5, "series": [{"data": [[1.74892986E12, 56.166666666666664], [1.7489298E12, 110.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74892986E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 56.166666666666664, "minX": 1.7489298E12, "maxY": 110.5, "series": [{"data": [[1.74892986E12, 56.166666666666664], [1.7489298E12, 110.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74892986E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 56.166666666666664, "minX": 1.7489298E12, "maxY": 110.5, "series": [{"data": [[1.74892986E12, 56.166666666666664], [1.7489298E12, 110.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74892986E12, "title": "Total Transactions Per Second"}},
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

