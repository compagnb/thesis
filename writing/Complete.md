# feelin.it
## sharing our emotional selves through biometrics
Barbara Compagnoni
Parsons The New School for Design


Submitted to the **School of Art, Media and Technology**, in partial fulfillment of the requirements for the degree of **Master of Science** in **Data Visualization** at **Parsons The New School for Design**.
May 2016


Thesis Faculty
Aaron Hill/Daniel Sauter


Production Website
[https://compagnb.github.io/thesis/](https://compagnb.github.io/thesis/)


© 2016 Barbara Compagnoni. All rights reserved.



* * *



## Abstract
How our bodies interpret data is the result of our brain processing the environment around us through our senses. The data collected from the environment triggers a response from the brain to different parts of the body. These physiological and psychological reactions become a unique series of signals and chain reactions controlled by the nervous system. These experiences become memories when data of the event is stored in the human brain. By collecting the environmental stimuli in its entirety, as well as the biometric data created by the electrical and chemical reactions communicating these responses throughout the body from the brain, we are able to evaluate the data without the influence of these filters. Each snapshot of intimate communication within our bodies is documented through the sensor readings of wearable technologies.These processors present biological data to the subject through the perceptions and realities created by the goals of the companies that produce these technologies. Feelin.it is an opportunity free, share and compare this intimate data with others whom we choose.




* * *




## Table of Contents:

###  Introduction
   1.1 Sharing Our Emotional Selves Through Biometrics
###  Signal Processing
   2.1 Stimuli
   2.2 Receiving, Transforming & Relaying Data
   2.3 Recording To Memory
   2.4 Responding To Stimuli
   2.5 Galvanic Skin Response
###  Tracking Signals
   3.1 Evolution of Tracking Technologies
### Building Feelin.it
   4.1 Choosing Wearable Technologies
   4.2 Emancipation of Basis Data
   4.3 Tracking Emotions
   4.4 Machine Learning
   4.5 Visualization of Data
### Findings, Reflections, and Next Steps
   5.1 Reflections
   5.2 Evolving Platform
### Bibliography




* * *


## 1 INTRODUCTION

We are constrained by our perception of reality. How our bodies interpret data is the result of our brain processing the environment around us. Data from the environment is observed through our senses, or in computational terms “sensors”.  However, these sensors can act as filters, collecting the information presumed relevant, disregarding the information deemed irrelevant.  Inherently they are biased based on the past experiences and bandwidth of the subject.

The stimulus data collected from the environment triggers a response from the brain to throughout the body. Through the interaction with these “sensors,” experiences become a unique series of signals and chain reactions controlled by the nervous system. By collecting the environmental stimuli more comprehensively, as well as the biometric data created by the electrical and chemical reactions communicating these responses throughout the body from the brain, we are able to interpret those stimuli more directly and immediately, without taking user action and and engaging bodily responses consciously. Hence by looking further into ourselves for data we (the subject) can begin to break down signals and reactions, thus freeing our data from the interpretations to which the mind constrains us.

As we begin to explore tracking these interactions, we can utilize wearable technology that documents biometric activity. We feel the constraints of data limitations from companies pushing these products. Each snapshot of intimate communication within our bodies is documented through the sensor readings of wearable technologies. These processors present biological data to the subject through the perceptions and realities created by the goals of these companies. For example, a Fitbit, marketed for weight loss, presents interactions through quantity of steps and heart rates throughout the day. Polar, marketed for heart monitoring during exercise, focuses on optimizing heart rate to achieve a more substantial workout. Both of these companies push their own agenda in the communication of this data, but are the standards they set applicable to our own methodologies?

Constrained by marketing agendas, such as the ones mentioned above, data is exploited as these perceptions are shared or sold to other populations with ulterior motives. While revealing this data to a medical professional may aide the advancements made in modern medical treatments, it could also lead to negative repercussions. For instance, if an insurance company were given access to the personal data recorded though these wearable products, the company may change rates based on assumptions revealed through this data. This has negative effects if the assumptions made are incorrect. For example, if the insurance company assumes pregnancy based off of this data and raising rates when the subject is not actually pregnant. By taking control of our own biometric data, the possibilities of creating our own feedback cycles and loops from this data would be endless.

### 1.1 Sharing Our Emotional Selves Through Biometrics.
The concept behind feelin.it is to go beyond the realities given by companies, such as fitbit and Jawbone, empowering one to utilize these devices for more then just the agendas, such as weight loss. Feelin.it provides an insight of their emotions as told through biometrics, which record the intimate communications between their sensors and brain. By connecting the biometrics to emotional responses, one has the ability to track their emotions throughout the time as well as predict the emotion from current biometric data when wearing an activity tracker. This will help to uncover a broader view of how data is interpreted within the one’s body and allow for users to share each unique reality with whom they choose.

While sharing this data is not mandatory, as with other devices, this possibility presents the opportunities for relationships between users may be reinforced. Allowing for people shared on other’s data to check in from time to time. By building triggers to alert people of their friend’s status, creates opportunities of praise and support as needed. In addition to everyday use, it is also be a helpful tool for the caregivers of people who have Post Traumatic Stress Disorder or other disabilities, such as Autism. In each, tracking emotions, can lead to a greater understanding of what may cause an attack or meltdown. It may also be used as a tool to quantify changes in behavior over time. For example, if one has moderate anxiety, they can track frequency of attacks over a period of time for comparison.
In order for feelin.it to become a tool utilizing biometric data to give insight to a broader view of emotions, further investigations need to be made. These explorations will include: how data is interpreted within the body as a series of intimate responses and how this data can be tracked?


## 2 SIGNAL PROCESSING

Signal processing begins with information from the environment activating a sensory receptor. As mentioned previously, these senses are made up of specialized cells in the human body, like computational sensory components. These components have the ability to aggregate data from physical changes, or stimuli from the environment.

### 2.1 Stimuli.
Stimuli can be both external and internal. Stimuli that aggregate data from outside of the human body are considered to be external and those that do from inside of the body are considered internal. External stimuli are most commonly experienced as: sensation/touch, vision, smell, taste, and sound. External stimuli can be experienced with different types of receptors inside of the sensory organ. For example, vision data from the environment is recorded by photoreceptors, which function similarly to computational “photo resistors”. These components capture the presence of light data or lack of light data that enters the retina. (Hecht, Shlar and Pirenne 1942) Internal stimuli are located deeper within the human body then external stimuli. They manage the main driving forces, within both human and computational systems. Homeostasis within the human body may include nutrient/ion levels in the blood, oxygen levels or water levels, while homeostasis within a computational system may include battery power and processor temperature. (Martin, Wallace and Fuchs 2001)

Each sensory component receives and transmits data in different ways. A sensory component can only capture stimulus data that pertains to that component. For example, the photo resistor that specializes in capturing the amount of light will not be able to capture the chemical reactions that result in taste and smell, and vice versa. All of these components, regardless of what type, have the sensitivity to capture the smallest effect of environment change, such as a fly gently landing on an arm, as well as much larger changes like a large object falling on a hand. (The Gale Group Inc. n.d.)

### 2.2 Receiving, Transforming & Relaying Data.
Data received by sensory components transform the data into an electrical signal either mechanically, using mechanotransduction or chemically using chemitransduction. (Martin, Wallace and Fuchs 2001) During mechanotransduction, components comprised of matrices interpret mechanical stimuli, most often as a result of sound and touch. As force is applied, ion channels in these components convert the stimulus into a signal that is then transmitted, and sometimes reshaping the organ. (Ingber 1997) (Janmey and McCulloch 2007) Similarly, during chemitransduction, chemical stimuli are received by components that also have ion channels. These channels are responsible for converting the stimulus into an electrical or chemical signal (Martin, Wallace and Fuchs 2001) Although these processes are slightly different, they both result in transforming the stimulus data into an electrical or chemical signal at the cellular level. Once the data is transformed to an electrical signal it is then transmitted through the nervous system on a pathway to the brain. When the signal reaches the brain, filtering of sensory data begins.

The brain is partitioned into different portions, or lobes. The partitions that are responsible for sensory information are: Frontal, Parietal, Occipital, and Temporal. The frontal lobe will determine similarities and differences between events and memories. It also filters and modifies emotional reactions to what is seen as a socially acceptable reaction for that event. (Hagmann, et al. 2008) The Parietal lobe processes data relating to the sense of touch, which also include pain and temperature, as well as, interpreting some aspects of interpreting visual stimuli, such as spatial relationships between objects. (Penfield and Rasmussen 1950) The Occipital lobe can be broken down into different sections that are all responsible for interpreting visual aspects such as, spatial frequency, motion perception, and color properties of the data received. (SparkNotes 2007) Finally, the Temporal lobe has a role in interpreting multiple types of sensor’s data. The auditory cortex, which is a portion within this lobe of the brain, receives data from sound sensors and processes the data into sounds, which are then recognized as words and speech.  The ventral portion of this lobe of the brain interprets visual data as recognizable objects, such as facial recognition. This lobe not only plays a role in processing visual and auditory data, it is also responsible for the storage of these events as new memories. (Smith 2007)

### 2.3 Recording To Memory.
As the brain processes sensory data, it is also stored in what is known as “sensory memory”. The data stored is “raw”, unprocessed data, conveyed by the signals sent from the sensory components, which provides the most comprehensive recording of the interaction. (Carlson 2010) Sensory memory is ultra short term, lasting only fraction of a second after the event has occurred, only to be replaced with a new set of sensory data.  While it is not stored for much time, it provides enough time for this data to be transferred to primary or active short-term memory (Coltheart 1980). Higher cognitive processes filter what information stored should be moved into primary short-term memory and active memory. From there it is again consolidated, and filtered where relevant pieces of information are transferred to long-term memory where they can be accessed by the brain when processing other sensory data as part of recognition.

### 2.4 Responding To Stimuli.
After processing, and storing sensory data, the respective areas of the nervous system can send one of two types of responses: excitatory or inhibitory. (Pitman 1984) Excitatory responses result in cells immediately communicating rapidly through neurons with impulses triggering a system response. Systems that are involved in these responses include, but are not limited to, muscular, endocrine and digestive. Some examples of systemic responses to excitatory responses may include: a muscle contraction as a response from a needle prick (caused by a release of calcium ions to bind to the muscle cell within the muscular system), increased heart rate from a loud sound (caused by the release of adrenaline in the endocrine system), or salivation at the sight or smell of food (caused by the release of digestive enzymes to aid in digestion). Inhibitory responses result in no communication, deliberately ignoring that data presented by that sensor. There are some studies within the brain inhibitory responses are actually due to slower communication between neurons, which can be due to higher processing tasks such as recognition. (Martin, Wallace and Fuchs 2001)

### 2.5 Galvanic Skin Response
Galvanic skin response, or GSR, is the measurement of electrodermal activity, or the amount of moisture released from our glands during signal processing within the body. Spikes in this activity are seen in the relay and transmission of sensory data, or as a response to stimuli.  For example, a spike can be seen from a pinprick, which can cause the sweat gland to release a small amount of water. Electrodermal activity is also responsive to many changes in human emotions. Fear, anger, shocked, and sexual arousal are some of the reactions will be reflected in changes in GSR measures.

Now with an understanding of the data that these sensors transmit, a further exploration can be made into how one can track these signals within the human body.


## 3 TRACKING SIGNALS.

Retrieval, processing, and systemic responses of/to sensory data all use signals to communicate to other parts of the body. By tracking signals information can be used to help detect, diagnose, and monitor current or potential issues that may arise. In the human body this may relate to disease as noted in an increased temperature or fever. In either case tracking this data will facilitate and determine a course of treatment or solution to the issue.

### 3.1 History of Tracking Technologies.
It was not until 1815, that a French physician, named René Laënnec, invented the stethoscope. (New York Times 2012) This was the first milestone to be made in technologies to monitor the human. After this initial milestone, more achievements were made in advancing this technology for monitoring the body.
In 1874, Richard Caton, used a galvanometer to monitor the neural impulses of animals, leading to the development of an electroencephalogram, or EEG. In 1924, Hans Berger, a German physiologist and psychiatrist, expanded on Caton’s research and began monitoring human neural impulses, or brain activity. (New York Times 2012) EEG’s measure this activity through electrodes placed on the scalp of the subject. Since the electrodes are placed on top of the skin, not requiring surgery, this is seen as a noninvasive method. The electrodes record the voltage fluctuations resulting from communication of neural cells in the brain. (Niedermeyer and da Silva 2004) Since the voltage is measured through the cranial bone, skin and other areas of the brain, sometimes it causes too much interference to produce an accurate signal for certain areas of the brain. If the electrodes were attached to more internal sections of the brain, which are more intrusive, the noise would be minimal. (Schlögl , Slater and Pfurtschelle 2002)

Electromyography (EMG), developed in 1890, and Magnetic Resonance Imaging (MRI), began to develop in 1971. (New York Times 2012) EMGs measure muscle activity through electrodes on the skin, similarly to how both EEG and the electrode version of EKG function. (Kamen 2004) MRI utilizes strong magnetic fields and radio waves to created rapidly sequential images of the body. This technique can successfully show how the brain responds to stimuli, unlike EEGs.  In addition to its ability to show neural activity it also is able to complement the data of, EKGs, x-rays, and gastrointestinal testing. (Lam 2016) Since MRI technologies do not use radiation and offers a higher resolution image, it is often used over other testing choices that do. Due to the strong magnetic fields and radio waves MRIs have had complications when patients with large amounts of metal inside of their body, such as cochlear implants and pacemakers. (Hartwig , et al. 2009)

In 1977, the first wireless heart rate monitor was invented, as a training aid for a ski team. (New York Times 2012) Modern heart rate monitors utilize a transmitter, usually in the form of a chest strap, and a receiver. (Burke 1998) More recent heart rate monitors use infrared light to measure heart rate. The blood absorbs infrared light, and a receiver measures how much of the infrared light has been absorbed. These measurements carry the information of the pulse increasing blood flow as it pumps. This milestone marked the beginnings of a movement known as the Quantified Self.

The Quantified Self movement is the gaining knowledge of oneself by tracking one’s daily life. Gathering this data requires the use of wearable technology, incorporation of electronic components and sensors onto an accessory or an article of clothing. Each sensor utilized in these forms of technology is for picking up specific types of data signals from the body, as are the body sensors.


## 4 BUILDING FEELIN.IT.

Creating feelin.it requires five main tasks: tracking and emancipation of biometric data, tracking and prediction of emotional data, and finally visualizing the results. First, wearable technology capable of gathering data from physiological signals within the body must be explored.

### 4.1 Choosing Wearable Technologies
Since wearable technologies gives is the ideal platform to measure signals within the body a side by side comparison of wrist wearables deciphered which device would offer the most unfiltered data. The monitors compared were: Fitbit Surge, Jawbone UP, Apple Watch and the Basis Peak.
The Fitbit Surge is marketed for fitness and weight loss. With the use of a three-dimensional accelerometer, the Surge is able to record steps taken, and combines it with user data to calculate distance walked, calories burned, floors climbed and activity duration and intensity. It also has the ability, using led technology to record heart rate. Although Fitbit has a developer API, regular users do not have access to data recovered unless the register as a developer. Once registered as a developer, the only raw data that is gathered by the device is the heart rate. Data presented representing track pace, distance, and elevation, calories burned, etc. are all calculations according to user profile and accelerometer data. The most detailed account of data that can be supplied by the Fitbit is only pulled once an hour. The accuracy of the data is questionable (Austin 2016), although earlier devices have passed tests in 2014. (Prigg 2014)

The next activity monitor investigated was the Jawbone UP 3. Similar to the Fitbit it calculates activity based off of a three-dimensional accelerometer. In addition, it also has temperature sensors to gauge the degree of the skin and air as well as, a bioimpedance sensor, similar to the sensors on a treadmill, to gather heart rate. (Lamkin 2015) Although sleep tracking is offered, it is not captured as raw data, rather it is estimated from heart rates, just as movements and steps are estimated from accelerometer data. If someone was meditating, it is likely this device would not be able to tell the difference. Similar to the Fitbit, Jawbone also offers a developer API. Unfortunately, the only data within this API that is left without manipulated is the heart rate.

The Apple Watch utilizes a three-dimensional accelerometer and optical heart rate monitor. Pulling a constant flow of data requires the use of additional applications. With limitations of pulling data in a timely manner, and lack of additional sensors, the Apple Watch is less then ideal for feelin.it at this time.

Although the Basis Peak also has a three-dimensional accelerometer like the Fitbit and Jawbone, it begins to stand out with an optical heart rate sensor that delivers a constant stream of heart rate. It also utilizes additional sensors that measure and deliver constant streams of data for skin temperature, air temperature and galvanic skin response (GSR). The constant stream of data, as well as the addition of the GSR sensor in the Basis Peak makes this wearable the ideal choice for use in feelin.it. Unfortunately, there is not developer API, or access to quantitative data outside of their own proprietary web and mobile applications. In order to move forward with feelin.it, the data will need to be emancipated.

![Fig. 1  Visual of which trackers have API access.](https://github.com/compagnb/thesis/blob/master/apwho.jpg)

Fig. 1  Visual of which trackers have API access.

### 4.2 Emancipation of Basis Data.
Data recorded by the sensors in the Basis Peak, are transmitted to the Basis server through the wireless connection to a computer or smartphone. Upon further investigation of the Basis web application, it appears that the sensor data stored in their database is pulled into the application once every ten minutes using a rest API. Leveraging this workflow to advantage the emancipation process, I created an open source server application with node.js to pull the data as it refreshed.

This server application utilizes two main node modules to function. The request module is used to request data from the basis web portal. Once the login page is requested, POST methods are used in order to remotely login to the portal. After login has been made successful, once again with the request module, the data is pulled as an object. The new data received is parsed and cleaned. Upon completion of this task the pg module is needed in order to send this data to the feelin.it postgres database, where the user has complete control over their own data.

![Fig. 2 Data structure of biometrics. ](https://github.com/compagnb/thesis/blob/master/datastructure.png)

Fig. 2 Data structure of biometrics. More in depth documentation of this process can be found at: [https://github.com/compagnb/basisExport](https://github.com/compagnb/basisExport)

### 4.3 Tracking Emotions
Now that the biometric data has been emancipated, we can witness the change in biometric readings such as heart rate, gsr, and temperature, as a result of signals being transmitted throughout our bodies. At this point, we are able to see that things are changing, but still do not have an idea of why or what causes these changes without secondary input from the user telling us more information about these moments.

In order to start to break down these physiological changes into emotions, multiple subjects were asked to keep an emotion and activity diary for a period of three weeks. During this time, the subjects recorded not only what they were doing, but how they felt, down to the minute of when they were doing/feeling it. These feelings were divided into six main categories: angry, sad, anxious, calm, happy and excited. As users began to journal their feelings and activities many users began adding different emotions such as, bored, tired, and hungry. This data was pulled at the end of each day, ideally merging into the feelin.it database.

![Fig. 3 Sample data recorded in journal.](https://github.com/compagnb/thesis/blob/master/journal.png)

Fig. 3 Sample data recorded in journal.These journals can be viewed at: [https://docs.google.com/a/newschool.edu/spreadsheets/d/1rG_J2YmQL6LRoZ0jfvg9cOUkfJ92bTHzPte9DAH9S5M/edit?usp=sharing](https://docs.google.com/a/newschool.edu/spreadsheets/d/1rG_J2YmQL6LRoZ0jfvg9cOUkfJ92bTHzPte9DAH9S5M/edit?usp=sharing)

### 4.4 Machine Learning
With both biometric data and user perception data available a method of data analysis that automates mathematical model building using algorithms, known as machine learning, can be used to find correlations between emotions and the corresponding biometrics at that time.

In this case, the model will be built using classification task in machine learning. Classification is just that; classifying something as one thing or another. In feelin.it, classification is used to classify the biometrics and time into a certain emotion. To build this model, first all journal and biometric data need to be combined. Ideally this would be done by pulling data from the feelin.it postgres database, but for its initial testing data was combined in python from csv files. Once all the data is merged into one file, features are pulled out to be used as factors that may help predict the emotion being had at that moment in time. Factors chosen should be true to the device, not the journal or emotions, because feelin.it can only rely on the data retrieved from the Basis Peak, not the intensive journals that were kept to facilitate the creation of the model. These factors include: time of day (hour), heart rate, skin temperature, air temperature, and GSR.

To have the ability to predict each emotion, a prediction model needs to be created for each emotion included. The initial results were not successful for prediction. Although the accuracy was high, there was a 0.01% and below true positive rate, due to the small data set size. In order to compensate for that, more iterations of the algorithm were added, as well as different combinations of emotions were also included. For example, anger and anxious were two emotions that were frequently found together, so one model had both of these emotions grouped together. After a few iterations of merging emotions, I felt it was best to simplify this more do to positive emotions, including “excited”, “happy”, and “calm”, and negative emotions, including “angry”, “sad” and “anxious”. This resulted in good accuracy and just about a 60% true positive rate.

![Fig. 4A  Initial results from machine learning.](https://github.com/compagnb/thesis/blob/master/ml1.png)
![Fig. 4B Modified emotion category results from machine learning.](https://github.com/compagnb/thesis/blob/master/ml2.png)

Fig. 4  Initial and modified emotion category results from machine learning.The machine learning tasks and results can be viewed at: [https://github.com/compagnb/IS_Emotion_ML](https://github.com/compagnb/IS_Emotion_ML)

Just as in regression, coefficients of these models are now incorporated into feelin.it to predict emotion as it is currently being felt without the use of a journal.

### 4.5 Visualization of Data
With all the data and prediction models in place, the final step in creating this tool is linking the biometric data to the emotion data predicted in a way that is easily communicated to shared users. Biometric data is normally shown and communicated in line graphs and charts, making it easy for the subject to see changes and peaks in their readings, but how does one communicate feelings?

Face-to-face communication involves gestures, facial expressions, and body language. These non-verbal attributes help us more accurately convey what we are trying to communicate. These tools are no longer available when using digital forms of communication. The use of emojis can remedy this issue by providing facial expressions or symbols for gestures that would take place in a face-to-face conversation. This method of digital communication has become increasingly popular in recent years. (Ayres n.d.)

Feelin.it combines traditional communication of biometric data as line charts and modern ways of digital communication of feelings. There are three metric readings included on a line chart created in D3.js. These metrics include skin temperature, heart rate and GSR – the same factors used in creating the mathematical model for emotional state. The emotional prediction is represented with a subset of emojis for each state modeled. As the user scrolls over the biometric data displayed on the graph, an emoji tells the user what is the emotional state for that moment in time.

To give the most comprehensive view of this data, each day is represented in its own line graph, which the user can review past data by selecting the desired date, or pressing the previous day button. On the right a larger emoji conveys the current emotion. If two users have shared their data, it is viewed on the same page so that users can see changes and emotional compatibilities.

![Fig. 5 Screengrab of feelin.it single view.](https://github.com/compagnb/thesis/blob/master/self.png)

Fig. 5 Screengrab of feelin.it single view.

![Fig. 6 Screengrab of feelin.it share view. ](https://github.com/compagnb/thesis/blob/master/share.png)

Fig. 6 Screengrab of feelin.it share view.


## 5 FINDINGS, REFLECTIONS AND NEXT STEPS

### 5.1 Reflections
The development of feelin.it has changed the way I look at biometric data. It is no longer just the beating of my heart as I meditate, surf, or work. It is the result of an intimate communication between my sensors and the filtered responses from my brain. Similarly, GSR does not just measure sweat. The data provided from skin response is a direct connection to the signals relaying within the body. This has not only been used for alternate studies for predicting seizures, but also in studies predicting stress levels in autistic children, by the MIT Media Lab.

The work involved with building feelin.it has challenged my skills in both front end and back end. Prior to building this, I had no knowledge of D3.js or using machine learning methods to build models for prediction, let alone incorporate the resulting coefficients into visualization. My basic knowledge on API’s was pushed further when node was incorporated on the back end to gain access to the raw data provided by the Basis server. Feelin.it also pushed me out of my comfort zone to design for accessibility and mobility.

### 5.2 Evolving Platform
In order for feelin.it to grow into something a tool that puts the power of self into the user further developments need to be made. The first adjustment that would need to be made would be revising the back end to allow for more than the test set of users to utilize, view and share their biometric and emotional data with feelin.it. This would require each user to be registered into the postgres database as a member with profile information, allowing for the retrieval of biometric and journal data. Doing this would open the platform up to more users.  Next, the addition of triggers to inform users of their friend’s emotional states would be introduced. By adding code to aggregate emotional data and ping-shared users with notifications of either an extreme high or low, would build and maintain relationships between users. This would also allow for users to support each other when needed.  Prior to adding any features allowing users to customize model predictors or emojis, a journal and summary of predictions would need to be added. By adding a summary of predictions, it would allow the user to see how accurate the predictions are. The addition of a journal, with both standard and user input categories for emotions, would provide data for the model to improve itself over time. Once this is completed customization features can be added to allow users to train the data for emotions not included in the original data set as well as their own visuals for them.  Prior to releasing a beta version of this tool, further user testing is needed.

![Fig. 7 Product shot of feelin.it ](https://github.com/compagnb/thesis/blob/master/final.jpg)

Fig. 7 Product shot of feelin.it
A live demo can be viewed at: [https://compagnb.github.io/thesis/](https://compagnb.github.io/thesis/)
Sample code can be found at: [https://github.com/compagnb/thesis](https://github.com/compagnb/thesis)



* * *



## Bibliography

Austin, Patrick. Consumer Reports: Taking the Pulse of Fitbit's Contested Heart Rate Monitors. January 22, 2016. http://www.consumerreports.org/fitness-trackers/taking-the-pulse-of-fitbits-contested-heart-rate-monitors/ (accessed April 10, 2016).

Ayres, Andrea. Emoji love: The science behind emoticons. http://blog.crew.co/emoji-love-the-science-behind-emoticons/ (accessed April 10, 2016).
Burke, Edmond. Heart Rate Monitoring And Training. Champain, IL: Human Kinetics, 1998.

Carlson, Neil R. Psychology The Science of Behavior. Boston, MA: Allyn & Bacon, 2010.
Coltheart, Max. "Iconic Memory And Visible Persistence." Perception & Psychophysics, 1980: 183–228.

Hagmann, Patric , et al. "Mapping the Structural Core of Human Cerebral Cortex." PLoS Biology, July 1, 2008: 1479–1493.

Hartwig , Valentina , Giulio Giovannetti , Nicola Vanello , Massimo Lombardi , Luigi Landini , and Silvana Simi . "Biological Effects And Safety In Magnetic Resonance Imaging: A Review." International Journal of Environmental Research and Public Health 6 (2009): 1778-1798.

Hecht, S., S. Shlar, and M.H. Pirenne. "Energy, Quanta, and Vision." Journal of General Physiology 25 (July 1942): 819–840.

Ingber, D. E. "Tensegrity: The Architectural Basis of Cellular Mechanotransduction." Annual Review of Physiology 59 (March 1997): 575–99.

Janmey, Paul A., and Christopher A. McCulloch. "Cell Mechanics: Integrating Cell Responses to Mechanical Stimuli." Annual Review of Biomedical Engineering 9 (April 2007): 1–34.

Kamen, Gary. Electromyographic Kinesiology. Champaign, IL: Human Kinetics, 2004.

Lam, Peter. MRI Scans: How Do They Work? February 19, 2016. http://www.medicalnewstoday.com/articles/146309.php (accessed April 10, 2016).

Lamkin, Paul. Wearable: Jawbone UP3 Review. September 18, 2015. http://www.wareable.com/jawbone/jawbone-up3-review (accessed April 10, 2016).

Martin, A. Robert , Bruce G. Wallace, and Paul A. Fuchs . From Neuron to Brain. Sunderland, MA: Sinauer Associates, Incorporated , 2001.

Millet, David. The origins of EEG. http://www.bri.ucla.edu/nha/ishn/ab24-2002.htm (accessed April 10, 2016).

New York Times. New York Times: Milestones in Medical Technology. October 12, 2012. http://www.nytimes.com/interactive/2012/10/05/health/digital-doctor.html?_r=0 (accessed April 10, 2012).

Niedermeyer, E., and F.L. da Silva. Electroencephalography: Basic Principles, Clinical Applications, and Related Fields. New York: Lippincot Williams & Wilkins., 2004.

Painter, Lewis. PC Advisor: Basis Peak. May 5, 2015.
http://www.pcadvisor.co.uk/review/wearable-tech/basis-peak-review-activity-tracker-smartwatch-3607365/ (accessed April 10, 2016).

Penfield, W., and T. Rasmussen. The cerebral cortex of a man: A clinical study of localization of function. New York: Macmillan, 1950.

Pitman, Robert M. "The Versatile Synapse." The Journal of Experimental Biology, 1984: 199–224.

Prigg, Mark. Daily Mail: Does your fitness band really work? June 9, 2014. http://www.dailymail.co.uk/sciencetech/article-2653178/Does-fitness-band-really-work-Scientists-analyse-tracking-tech-Fitbit-no-effective-pedometer.html (accessed April 10, 2016).

Schlögl , Alois, Mel Slater, and Gert Pfurtschelle. "Presence Research And EEG." London, 2002.

Sensigent Intelligent Sensing Solutions. Cyranose 320. http://www.sensigent.com/products/cyranose.html (accessed April 10, 2016).

Smith, Kosslyn. Cognitive Psychology: Mind and Brain. New Jersey: Prentice Hall, 2007.

SparkNotes. SparkNotes: Brain Anatomy: Parietal and Occipital Lobes. December 31, 2007. http://web.archive.org/web/20071231064003/http://www.sparknotes.com/psychology/neuro/brainanatomy/section5.rhtml (accessed April 10, 2016).

The Gale Group Inc. . Absolute Threshold. http://www.encyclopedia.com/doc/1G2-3406000012.html (accessed May 12, 2016).







