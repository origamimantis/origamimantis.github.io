let stuff = {
  "stuff" :
  [
    {
      "date" : "Feb. 2020.",
      "txt" : "HackUCI 2020",
      "imgs" :
      [
	{
	  "src" : "hack2020_2.jpg",
	  "txt" : "Here I am, sleep deprived, drawing on my laptop screen using my phone as a wii-remote pen. Initially, I tried using acceleration values to track the user's position, but that was doomed to fail. I ended up tracking the user's device angle and converting that to a 2D coordinate."
	},
	{
	  "src" : "hack2020_1.jpg",
	  "txt" : "One of the organizers took a picture and my team happened to be in it. Somehow literally everyone looks normal except for me."
	},
	{
	  "src" : "hack2020_0.jpg",
	  "txt" : "We won Best Education Hack in this hackathon, and this was one of the pictures that were taken \"officially\" to commemorate."
	}
      ]
    },

    {

      "date" : "Oct. 2019.",
      "txt" : "ICS33 reader",
      "imgs" :
      [
	{
	  "src" : "reader_33.png",
	  "txt" : "I was hired to be a reader for UCI's intermediate programming class because I somehow earned rank#1 when I took it. This was the picture that was used on the class website, so I made sure to include this library sign that said \"Ask Us\". Unfortunately, a my job was to grade papers, which I couldn't stand, so I left after one quarter. Then I rejoined for another quarter and immediately left again."
	}
      ]
    },
    {
      "date" : "Jul. 2019.",
      "txt" : "Shanghai Jiaotong University research intern.",
      "imgs" :
      [
	{
	  "src" : "detect.png",
	  "txt" : "I went to SJTU to research \"autonomous quadrotor landing on a moving platform\", which was about using computer vision to detect landing platforms for a drone. This was were my labmate and I were learning object detection algorithms. My program here is actually severely flawed; rather than finding objects, it just looks for pixel values close to a target color, and draws a box around the most concentrated place!"
	},
	{
	  "src" : "drone.jpg",
	  "txt" : "Flying the drone using its normal remote control. This was to get used to drone movement before going hands-off."
	},
	{
	  "src" : "drone2.png",
	  "txt" : "Flying a drone by connecting to it with my laptop. This was done is something called ROS (Robot Operating System). It works using a publisher-subscriber architecture: the drone subscribed to my program, and my program would publish commands that the drone would follow. The drone was crashed many times."
	}
      ]
    }


  ]
}