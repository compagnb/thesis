# 4 BUILDING FEELIN.IT.

Creating feelin.it requires five main tasks: tracking and emancipation of biometric data, tracking and prediction of emotional data, and finally visualizing the results. First, wearable technology capable of gathering data from physiological signals within the body must be explored.

## 4.1 Choosing Wearable Technologies
Since wearable technologies gives is the ideal platform to measure signals within the body a side by side comparison of wrist wearables deciphered which device would offer the most unfiltered data. The monitors compared were: Fitbit Surge, Jawbone UP, Apple Watch and the Basis Peak.
The Fitbit Surge is marketed for fitness and weight loss. With the use of a three-dimensional accelerometer, the Surge is able to record steps taken, and combines it with user data to calculate distance walked, calories burned, floors climbed and activity duration and intensity. It also has the ability, using led technology to record heart rate. Although Fitbit has a developer API, regular users do not have access to data recovered unless the register as a developer. Once registered as a developer, the only raw data that is gathered by the device is the heart rate. Data presented representing track pace, distance, and elevation, calories burned, etc. are all calculations according to user profile and accelerometer data. The most detailed account of data that can be supplied by the Fitbit is only pulled once an hour. The accuracy of the data is questionable (Austin 2016), although earlier devices have passed tests in 2014. (Prigg 2014)

The next activity monitor investigated was the Jawbone UP 3. Similar to the Fitbit it calculates activity based off of a three-dimensional accelerometer. In addition, it also has temperature sensors to gauge the degree of the skin and air as well as, a bioimpedance sensor, similar to the sensors on a treadmill, to gather heart rate. (Lamkin 2015) Although sleep tracking is offered, it is not captured as raw data, rather it is estimated from heart rates, just as movements and steps are estimated from accelerometer data. If someone was meditating, it is likely this device would not be able to tell the difference. Similar to the Fitbit, Jawbone also offers a developer API. Unfortunately, the only data within this API that is left without manipulated is the heart rate.

The Apple Watch utilizes a three-dimensional accelerometer and optical heart rate monitor. Pulling a constant flow of data requires the use of additional applications. With limitations of pulling data in a timely manner, and lack of additional sensors, the Apple Watch is less then ideal for feelin.it at this time.

Although the Basis Peak also has a three-dimensional accelerometer like the Fitbit and Jawbone, it begins to stand out with an optical heart rate sensor that delivers a constant stream of heart rate. It also utilizes additional sensors that measure and deliver constant streams of data for skin temperature, air temperature and galvanic skin response (GSR). The constant stream of data, as well as the addition of the GSR sensor in the Basis Peak makes this wearable the ideal choice for use in feelin.it. Unfortunately, there is not developer API, or access to quantitative data outside of their own proprietary web and mobile applications. In order to move forward with feelin.it, the data will need to be emancipated.

![Fig. 1  Visual of which trackers have API access.](https://github.com/compagnb/thesis/blob/master/apwho.jpg)

## 4.2 Emancipation of Basis Data.
Data recorded by the sensors in the Basis Peak, are transmitted to the Basis server through the wireless connection to a computer or smartphone. Upon further investigation of the Basis web application, it appears that the sensor data stored in their database is pulled into the application once every ten minutes using a rest API. Leveraging this workflow to advantage the emancipation process, I created an open source server application with node.js to pull the data as it refreshed.

This server application utilizes two main node modules to function. The request module is used to request data from the basis web portal. Once the login page is requested, POST methods are used in order to remotely login to the portal. After login has been made successful, once again with the request module, the data is pulled as an object. The new data received is parsed and cleaned. Upon completion of this task the pg module is needed in order to send this data to the feelin.it postgres database, where the user has complete control over their own data.

![Fig. 2 Data structure of biometrics. ](https://github.com/compagnb/thesis/blob/master/datastructure.png)
More in depth documentation of this process can be found at: [https://github.com/compagnb/basisExport](https://github.com/compagnb/basisExport)

## 4.3 Tracking Emotions
Now that the biometric data has been emancipated, we can witness the change in biometric readings such as heart rate, gsr, and temperature, as a result of signals being transmitted throughout our bodies. At this point, we are able to see that things are changing, but still do not have an idea of why or what causes these changes without secondary input from the user telling us more information about these moments.

In order to start to break down these physiological changes into emotions, multiple subjects were asked to keep an emotion and activity diary for a period of three weeks. During this time, the subjects recorded not only what they were doing, but how they felt, down to the minute of when they were doing/feeling it. These feelings were divided into six main categories: angry, sad, anxious, calm, happy and excited. As users began to journal their feelings and activities many users began adding different emotions such as, bored, tired, and hungry. This data was pulled at the end of each day, ideally merging into the feelin.it database.

![Fig. 3 Sample data recorded in journal.](https://github.com/compagnb/thesis/blob/master/journal.png)
These journals can be viewed at: [https://docs.google.com/a/newschool.edu/spreadsheets/d/1rG_J2YmQL6LRoZ0jfvg9cOUkfJ92bTHzPte9DAH9S5M/edit?usp=sharing](https://docs.google.com/a/newschool.edu/spreadsheets/d/1rG_J2YmQL6LRoZ0jfvg9cOUkfJ92bTHzPte9DAH9S5M/edit?usp=sharing)

##4.4 Machine Learning
With both biometric data and user perception data available a method of data analysis that automates mathematical model building using algorithms, known as machine learning, can be used to find correlations between emotions and the corresponding biometrics at that time.

In this case, the model will be built using classification task in machine learning. Classification is just that; classifying something as one thing or another. In feelin.it, classification is used to classify the biometrics and time into a certain emotion. To build this model, first all journal and biometric data need to be combined. Ideally this would be done by pulling data from the feelin.it postgres database, but for its initial testing data was combined in python from csv files. Once all the data is merged into one file, features are pulled out to be used as factors that may help predict the emotion being had at that moment in time. Factors chosen should be true to the device, not the journal or emotions, because feelin.it can only rely on the data retrieved from the Basis Peak, not the intensive journals that were kept to facilitate the creation of the model. These factors include: time of day (hour), heart rate, skin temperature, air temperature, and GSR.

To have the ability to predict each emotion, a prediction model needs to be created for each emotion included. The initial results were not successful for prediction. Although the accuracy was high, there was a 0.01% and below true positive rate, due to the small data set size. In order to compensate for that, more iterations of the algorithm were added, as well as different combinations of emotions were also included. For example, anger and anxious were two emotions that were frequently found together, so one model had both of these emotions grouped together. After a few iterations of merging emotions, I felt it was best to simplify this more do to positive emotions, including “excited”, “happy”, and “calm”, and negative emotions, including “angry”, “sad” and “anxious”. This resulted in good accuracy and just about a 60% true positive rate.

![Fig. 4  Initial results from machine learning.](https://github.com/compagnb/thesis/blob/master/ml1.png)
![Fig. 4  Modified emotion category results from machine learning.](https://github.com/compagnb/thesis/blob/master/ml2.png)
The machine learning tasks and results can be viewed at: [https://github.com/compagnb/IS_Emotion_ML](https://github.com/compagnb/IS_Emotion_ML)

Just as in regression, coefficients of these models are now incorporated into feelin.it to predict emotion as it is currently being felt without the use of a journal.

4.5 Visualization of Data
With all the data and prediction models in place, the final step in creating this tool is linking the biometric data to the emotion data predicted in a way that is easily communicated to shared users. Biometric data is normally shown and communicated in line graphs and charts, making it easy for the subject to see changes and peaks in their readings, but how does one communicate feelings?

Face-to-face communication involves gestures, facial expressions, and body language. These non-verbal attributes help us more accurately convey what we are trying to communicate. These tools are no longer available when using digital forms of communication. The use of emojis can remedy this issue by providing facial expressions or symbols for gestures that would take place in a face-to-face conversation. This method of digital communication has become increasingly popular in recent years. (Ayres n.d.)

Feelin.it combines traditional communication of biometric data as line charts and modern ways of digital communication of feelings. There are three metric readings included on a line chart created in D3.js. These metrics include skin temperature, heart rate and GSR – the same factors used in creating the mathematical model for emotional state. The emotional prediction is represented with a subset of emojis for each state modeled. As the user scrolls over the biometric data displayed on the graph, an emoji tells the user what is the emotional state for that moment in time.

To give the most comprehensive view of this data, each day is represented in its own line graph, which the user can review past data by selecting the desired date, or pressing the previous day button. On the right a larger emoji conveys the current emotion. If two users have shared their data, it is viewed on the same page so that users can see changes and emotional compatibilities.

![Fig. 5 Screengrab of feelin.it single view.](https://github.com/compagnb/thesis/blob/master/self.png)

![Fig. 6 Screengrab of feelin.it share view. ](https://github.com/compagnb/thesis/blob/master/share.png)
A live demo can be viewed at: [https://compagnb.github.io/thesis/](https://compagnb.github.io/thesis/). Sample code can be found at: [https://github.com/compagnb/thesis](https://github.com/compagnb/thesis)
