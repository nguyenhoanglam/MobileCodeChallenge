MobileCodeChallenge
========

Demo
--------

1. Initial debit card screen
<img src="https://i.imgur.com/Y14PVjV.png" height="652" width="301"> 
2. Hide card number
<img src="https://i.imgur.com/gv9yYYF.png" height="652" width="301">
3. Set spending limit (non selected)
<img src="https://i.imgur.com/qZMEscM.png" height="652" width="301">
4. Set spending limit
<img src="https://i.imgur.com/3nR6u3B.png" height="652" width="301">
5. Spending limit updated
<img src="https://i.imgur.com/s3Bv6Z8.png" height="652" width="301">

Guide
--------

- Run ```yarn install``` to install dependencies
- Install XCode pods with ```cd ios && pod install```
- Run ```npx react-native link``` to linking custom font
- Run ```yarn ios``` or ```yarn android``` to run the app on iOS or Android simulator
- For Unit/UI test, run ```yarn test```

Note
--------

- Beacause mock api doesn't allow to update data to its database, any update request (enable/disable spending limit) will not take into effect. So, we manually make a fake response for this demo.

Coding skills & Experience
--------

- Hooks, ```react-navigation```, ```RNFirebase```, ```CodePush```, ```axios```, ```formik/yup```, deeplink
- State management with ```redux```, ```redux-saga```,```redux-persist```, ```redux-toolkit```, offline mode
- Perfomance optimization, custom reusable components,  animation
- Unit test with ```jest```, UI test with ```react-native-testing-library```

License
--------

Copyright (c) 2021 Nguyen Hoang Lam

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
