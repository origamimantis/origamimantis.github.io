let stuff = {
  "stuff" :
  [
    {
      "date" : "Aug 2021. ~",
      "txt" : "Research the Center for Research in Biological Systems @ UCSD, joint with UCI",
      "imgs" :
      [
	{
	  "src" : "crbs_logo.jpeg",
	  "txt" : "One of my PIs from the MathBioU program (scroll down) asked me to join his other research project, so I did. Why not? The project was to build a deep learning pipeline for identifying and classifying chlamydia in microscopy images. There are 4 types of chlamydia to classify: reticulate bodies (RB), RBs that are dividing (DB), intermediate bodies (IB), and elementary bodies (EB). RBs are the initial type of chlamydia, and they just divide (during this they are called DB). At some point, the center of the RB starts accumulating a dense, dark colored material -- this is when it is known as an IB (it is a mode of transition). The IB shrinks and the dark center gets larger until it is small and dense; this is an EB. EBs are the infectious form of chlamydia. It was quite difficult at first because of all this knowledge as well as learning new software. Upon finding out my home computer did not have GPUs for computing, I was granted access to CRBS's computing machines. These had hella big GPUs (50GB memory) and also I don't think anyone else uses them. Feels good man. This image is the login screen (and my program running on the GPU)."
	},
	{
	  "src" : "crbs_python.jpeg",
	  "txt" : "It's called a pipeline because there's actually more than one AI model doing work. There are 3 models to produce image segmentations of RB/DBs (2 models) and EB/IBs (1 model). Additionally, there is a model for RB/DB classification and a model (that I made!) for EB/IB classification.<br><br>My initial job just dealt with the RB/DB side and getting them to live together in a single Docker image. This was actually the main problem that was being faced when I was added. My solution was finicky and hacky, but it worked well. Since two of the models had conflicting Python versions, I just compiled a new Python version from source on initialization. Honestly I blame Docker for not having \"multiple inheritence\". This image is a section of the Dockerfile (initialization file) that shows the hack. After that worked, my PIs decided they wanted the pipeline to also handle EB/IB classification."
	},
	{
	  "src" : "crbs_pred.jpeg",
	  "txt" : "So I trained an EB/IB classifier, and while it is difficult to show the full predictions (they are 3D images), pictured is a slice of one of them. RBs are green, DBs are blue, EBs are yellow, IBs are purple."
	}
      ]
    },


    {
      "date" : "Jul 2021 - Aug 2021.",
      "txt" : "Summer research in UCI MathBioU",
      "imgs" :
      [
	{
	  "src" : "biou_heatmap.jpg",
	  "txt" : "This was a short joint summer research program for university students and high schoolers. The university program was BioU, while the high school program was ExplR (or something like that). The project I was in was \"Modeling of 3D Enhancer-Promoter Interactions Using Experimental Contact Frequency Data\". In essence, DNA consists of genes, promoters, and enhancers. Enhancers help activate promoters, which allows them to start reading the gene and making proteins. Because DNA is very loopy, locations that are far away on the genome can get close to each other. This happens sometimes for enhancers and promoters. Our PI was very interested in \"enhancer hubs\", where many enhancers come close together to boost a gene. By stiffening DNA and slicing it, sections of the genome can be checked for \"being close in space\". By repeating this many times, you can get a mapping that tells you how likely two sections of DNA are to be nearly touching. This is what is meant by \"experimental contact frequency data\", and is pictured in the image."
	},
	{
	  "src" : "biou_simann.jpg",
	  "txt" : "In the early stages of the project, we decided to write an optimization algorithm on 3D coordinates to simulate sections of DNA. Consecutive sections would not be too far, any two sections would not be too close, and the probability chart (heatmap) would be respected. While our algorithm worked, the heatmap had to be scaled down due to performance reasons. So it made some pretty graphs, but was basically useless."
	},
	{
	  "src" : "biou_csynth.jpg",
	  "txt" : "My labmate found this online software called CSynth, which did the same optimization but extremely quickly. There's not much to say here; the only difficult thing here was getting the input files to work with the software, which wasn't actually that difficult."
	},
	{
	  "src" : "biou_snake.jpg",
	  "txt" : "What was interesting was the analysis of the models, however. The gene we studied was miR9-2, which is a gene that makes microRNA which is apparently vital to brain development. So we analysed data from mice (at embryo day 14) cortical neurons (CN), neural progenitor cells (NPC), and stem cells (ES). Since the gene was high function in the brain, the stem cells were used as a control. Additionally, the locations of enhancers and genes were located in the DNA by checking which sections were conserved between different anumals. Then we compared the spatial distance of each section of DNA to the miR9 gene, which resulted in this graph.<br><br>I thought this was pretty amazing, since the enhancers lined up with the local minima in the graph. This was despite the fact that the contact frequency heatmap was obtained independently of the enhancer locations! We had to write a paper about this, so we concluded that there was an enhancer hub around miR9, since the DNA was shaped such that the enhancers were brought closer."
	}
      ]
    },


    {
      "date" : "Jan 2021 - May 2021.",
      "txt" : "Research at UCI's Mobley Lab",
      "imgs" :
      [
	{
	  "src" : "wbo.jpg",
	  "txt" : "I got this research position after my Programming with Libraries professor forwarded a recruitment email to the class. I applied, got interviewed, got ignored for a year, and then accepted.<br><br>My job in this lab was to benchmark two algorithms (Openeye AM1 and GFN2-xTB) for calculating values for molecules, and to make pretty graphs. For example, molecules have energy as well as bond order. This graph plots the Wiberg bond order as calculated by the two different algorithms. What I like about this graph is that you can click on the datasets to show or hide the corresponding points. This was also one of the last graphs that I made in this group, because I was getting kind of getting bored of running a glorified for-loop over a database for a few hours and making a plot. Also, it was about a week before summer break so it was a good time to leave."
	},
	{
	  "src" : "energy.jpg",
	  "txt" : "As mentioned earlier, molecules have an energy associated with them. The lower the energy is, the more stable the molecule is. This scatter plot compares the energies as calculated by AM1 and xTB with reference to a database called QCArchive. So these values are the difference between the algorithm's energy and the database's energy. This is called relative energy (or ddE). Also, these plots are huge, the file size is like 400MB."
	},
	{
	  "src" : "rmsd.jpg",
	  "txt" : "Apparently, physical structure was also quite important. Each molecule has a number of different stable positions which are called conformations. For some reason, these conformations were treated as different molecules. What was interesting was that different algorithms usually ended up having slightly different structures because internally, they used different algorithms to optimize the coordinates of each atom. This plot compares the RMSD (root-man-square distance) of molecules made by AM1 and xTB compared to the reference database QCArchive."
	},
	{
	  "src" : "rmsd_bad.jpg",
	  "txt" : "This was one of the earlier plots of the RMSD comparison. This graph was incorrect because the units of distance in the xTB algorithm were different from those in AM1; one was in Bohr, and the other was in Angstrom! In fact, this plot ended up getting shown to the creator of the optimization engine used in xTB... and he <del>roasted me</del> was concerned about why it was wrong.<br><br><br>As sort of final thoughts, this research had a very heavy learning curve. I had taken the first course in general chemistry before I did this research so things like molecular energy made sense to me. But computational chemistry was a whole different beast. Most of the things I had to learn were pretty niche, like how to read an .sdf file or how to use chemistry libraries. But I did end up being able to run things on UCI's computing cluster HPC3 (High Performance Community Computing Cluster), which was a good experience."
	}
      ]
    },


    {
      "date" : "Feb 2020.",
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
	  "txt" : "We won Best Education Hack in this hackathon, and this was a pictures of our team that was taken \"officially\" to commemorate. Each of us won a $50 amazon gift card as well as a \"3Doodler\" 3D printing pen."
	}
      ]
    },

    {

      "date" : "Oct 2019 - Dec 2019, Oct 2020 - Dec 2020",
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
      "date" : "Jul 2019 - Aug 2019.",
      "txt" : "Shanghai Jiaotong University research intern.",
      "imgs" :
      [
	{
	  "src" : "detect.png",
	  "txt" : "I went to SJTU to research \"autonomous quadrotor landing on a moving platform\", which was about using computer vision to detect landing platforms for a drone. This was were my labmate and I were learning object detection algorithms. My program here is actually severely flawed; rather than finding objects, it just looks for pixel values close to a target color, and draws a box around the most concentrated place!"
	},
	{
	  "src" : "drone.jpg",
	  "txt" : "Flying the drone using its normal remote control (which was a phone app). This was to get used to drone movement before going hands-off."
	},
	{
	  "src" : "drone2.png",
	  "txt" : "Flying a drone by connecting to it with my laptop. This was done is something called ROS (Robot Operating System). It works using a publisher-subscriber architecture: the drone subscribed to my program, and my program would publish commands that the drone would follow. The drone was crashed many times."
	}
      ]
    }


  ]
}
