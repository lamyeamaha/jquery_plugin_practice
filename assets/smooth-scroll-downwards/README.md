# No Fuss Jquery Smooth Scroll Plugin
If you like seeing smooth scrolling animations on your website, then you are at the right place! This plugin has an absolutely 
easy installation and implemenation process for your website. Read the instructions below to get started.

## File requirements
1.  Go to the plugin files folder. <a href="https://github.com/sricharankrishnan/no-fuss-smooth-scroll-jquery-plugin/tree/master/plugin-files">Click here</a>
2.  Download Jquery Source file version 3.3.1 (you can skip this step in case you already have jquery in your project)
3.  Download ```no-fuss-jquery-smoothy-scroll.js``` file
4.  Place the files in an appropriate location in your project folders
5.  Implment with a script tag like shown below:

```<script src="/path/to/no-fuss-jquery-smoothy-scroll.js" type="text/javascript"></script>```


## Implemenation
1.  The name of the function that needs to be invoked is called <strong>makeItRealSmooth()</strong>
2.  This function will need 1 mandatory parameter and 3 others are optional
3.  Details of the parameters to be implemented for this plugin is in the following section
4.  Once you have called the function based on the implementation guildlines, click on the element to see the magic happen.
5.  Example of this is shown below:

```
makeItRealSmooth($("#examplebutton"), 500, 0, function() {
  /* this is a callback function */
  console.log("Make it real smooth completed. Whats next to be done?");
});

/* once this is done, you can click on $("#exampleButton"). No need for seperate click event registry/handler */
```

## Details of Implemenation
There are a total of 4 paramters that would be received by this function. These are:
1.  <strong>The Element</strong>: this is mandatory. Please ensure to select the element in regular jquery selector as shown in the example 
above. Also please note that this element will need to have a data attribute called "data-smoothytarget" which will have the target's id value.
Notice that the data attribute value has an <strong>#</strong> in it. Example of this is:
```
  <button class="buttonClass" id="trigger" data-smoothytarget="#footer">Click Me To Go To Footer</button>
```

2.  <strong>Duration</strong>: this is optional. This has to be of a number type and greater than zero. Otherwise we're using default value as 
450 milliseconds. Values entered here are considered in milliseconds.

3.  <strong>Offset Difference</strong>: this is optional. This represents the offset difference from the target element. If you place a positive value,
then the scroll will stop 'X' pixels before the target element. If you enter a negative value, then it will scroll 'X' pixels after the target element. 

4.  <strong>Callback</strong>: this is optional. This is a function that would be invoked/executed once the scroll animation is completed. Check the 
example shown above for understanding.


## Support This Project
All you have to do is place a star on this github project and thats all. It would go a long way encouraging me to build more open source projects like 
this. Happy coding and wishing you a nice day. If there are any issues, please feel free to raise a github issue, will resolve it at the earliest possibe.
