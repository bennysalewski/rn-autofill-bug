Reproduction Repo for https://github.com/software-mansion/react-native-screens/issues/349

When using enableScreens(true) the autofill suggestions do not show up at all. Also, long tapping into the field, and selecting 'Autofill' in the context menu, results in a toast saying "Contents can't be autofilled."

When using enableScreens(false) the autofill suggestions do show up, and can't be selected, resulting in the input fields to get populated.

NOTE: it seems that since React Navigation 5, the Autofill suggestion to 'Save password' after login is not showing up, with or without screens. In previous versions ( react nav 4 ) this was working when screens was off. Hard to say were the issue comes from now.
