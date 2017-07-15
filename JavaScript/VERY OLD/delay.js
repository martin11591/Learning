function delay(delayTime) {
  delayTimerStart=new Date().getTime();
  do {
    delayTimerStop=new Date().getTime();
    delayTimeElapsed=delayTimerStop-delayTimerStart;
  } while(delayTimeElapsed<=delayTime);
}