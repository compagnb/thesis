# 5 FINDINGS, REFLECTIONS AND NEXT STEPS

## 5.1 Reflections
The development of feelin.it has changed the way I look at biometric data. It is no longer just the beating of my heart as I meditate, surf, or work. It is the result of an intimate communication between my sensors and the filtered responses from my brain. Similarly, GSR does not just measure sweat. The data provided from skin response is a direct connection to the signals relaying within the body. This has not only been used for alternate studies for predicting seizures, but also in studies predicting stress levels in autistic children, by the MIT Media Lab.

The work involved with building feelin.it has challenged my skills in both front end and back end. Prior to building this, I had no knowledge of D3.js or using machine learning methods to build models for prediction, let alone incorporate the resulting coefficients into visualization. My basic knowledge on API’s was pushed further when node was incorporated on the back end to gain access to the raw data provided by the Basis server. Feelin.it also pushed me out of my comfort zone to design for accessibility and mobility.

## 5.2 Evolving Platform
In order for feelin.it to grow into something a tool that puts the power of self into the user further developments need to be made. The first adjustment that would need to be made would be revising the back end to allow for more than the test set of users to utilize, view and share their biometric and emotional data with feelin.it. This would require each user to be registered into the postgres database as a member with profile information, allowing for the retrieval of biometric and journal data. Doing this would open the platform up to more users.  Next, the addition of triggers to inform users of their friend’s emotional states would be introduced. By adding code to aggregate emotional data and ping-shared users with notifications of either an extreme high or low, would build and maintain relationships between users. This would also allow for users to support each other when needed.  Prior to adding any features allowing users to customize model predictors or emojis, a journal and summary of predictions would need to be added. By adding a summary of predictions, it would allow the user to see how accurate the predictions are. The addition of a journal, with both standard and user input categories for emotions, would provide data for the model to improve itself over time. Once this is completed customization features can be added to allow users to train the data for emotions not included in the original data set as well as their own visuals for them.  Prior to releasing a beta version of this tool, further user testing is needed.





