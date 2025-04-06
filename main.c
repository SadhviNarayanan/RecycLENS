/*********************************************************************
*                    SEGGER Microcontroller GmbH                     *
*                        The Embedded Experts                        *
**********************************************************************

-------------------------- END-OF-HEADER -----------------------------

File    : main.c
Purpose : Generic application start

*/

#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include "EasyREDVIO_ThingPlus.h"

# define LED0 20
# define LED1 21
# define LED_WIN 22
# define LED_LOSE 23
# define SWITCH0 18
# define SWITCH1 19

//void delay (int ms) {
//    volatile uint64_t *mtime = (uint64_t*)0x0200bff8;
//    uint64_t doneTime = *mtime + (ms * 32768) / 1000; // 32768 is the number of ticks this clock does per second

//    while (*mtime < doneTime); // wait until time is reached
//}


int main(void) {
  // initializing our values
  //volatile uint32_t *GPIO0_output_en = (uint32_t*)0x10012008;
  //volatile uint32_t *GPIO0_output_val = (uint32_t*)0x1001200C;
  pinMode(23, OUTPUT);
  pinMode(22, OUTPUT);
  pinMode(21, OUTPUT);


  // enable pins connecting to the LEDs as outputs, disabling the other enables for these pins
   // enable output pins for LED
  // *GPIO0_output_en |= ((1 << LED_LOSE));

  //*GPIO0_output_val |= (1 << LED_LOSE); // we were correct, flash the RIGHT (yellow) LED
  while(1){
    digitalWrite(23, 1);
    delayLoop(20000);
    digitalWrite(23, 0);
    digitalWrite(22, 1);
    delayLoop(20000);
    digitalWrite(22, 0);
    digitalWrite(21, 1);
  }
}
