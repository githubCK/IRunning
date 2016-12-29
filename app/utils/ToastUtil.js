/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import {
  Platform,
  Alert
} from 'react-native';
import Toast from 'react-native-root-toast';

let toast;

export const toastShort = (content, isAlert) => {
  if (toast !== undefined) {
    Toast.hide(toast);
  }
  if (isAlert) {
    Alert.alert(
      '提示',
      content.toString()
    );
  } else {
    toast = Toast.show(content.toString(), {
      duration: Toast.durations.SHORT,
      position: Platform.OS === 'android' ? Toast.positions.BOTTOM : Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0
    });
  }
};

export const toastLong = (content, isAlert) => {
  if (toast !== undefined) {
    Toast.hide(toast);
  }
  if (isAlert) {
    Alert.alert(
      '提示',
      content.toString()
    );
  } else {
    toast = Toast.show(content.toString(), {
      duration: Toast.durations.LONG,
      position: Platform.OS === 'android' ? Toast.positions.BOTTOM : Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0
    });
  }
};
