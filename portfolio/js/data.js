/* ============================================================
   SITE DATA  —  THE ONLY FILE YOU EDIT TO POPULATE THE SITE
   ============================================================

   Three sections:
     HOME         tiles on the front page (index.html)
     COLLECTIONS  sub-galleries reached from a home tile
                  (e.g. the Steri-Clean grid)
     PROJECTS     the content of each individual project page

   A TILE (HOME + collections):
     { title:"...", subtitle:"...", thumb:"assets/thumbs/x.png",
       href:"project.html?p=slug", locked:true }
   A PROJECT (detail page):
     { slug:"...", title:"...", category:"...", description:"...",
       video:{type:"youtube",id:"..."}, gallery:["assets/gallery/a.jpg"] }
   Video: {type:"youtube",id} {type:"vimeo",id} {type:"file",src} {type:"embed",src}

   All thumbnails now live in ONE folder: assets/thumbs/
   Any thumb whose file isn't there yet shows the auto placeholder.
============================================================ */


/* ===========================  HOME  ========================= */
const HOME = [
  { title:"Shenandoah",              thumb:"assets/thumbs/shenandoah.png",              href:"project.html?p=shenandoah-documentary" },
  { title:"Williamsburg Foundation", thumb:"assets/thumbs/williamsburg.png",            href:"project.html?p=colonial-williamsburg-foundation" },
  { title:"City B-Roll",             thumb:"assets/thumbs/trainbridge.png",             href:"project.html?p=city" },
  { title:"The Richmond Forum",      thumb:"assets/thumbs/richmond-forum.png",          href:"project.html?p=forum" },
  { title:"Location Drone Reel",     thumb:"assets/thumbs/DroneReel.jpg",               href:"project.html?p=drone" },
  { title:"Combustion Inc",          thumb:"assets/thumbs/combustion.png",              href:"project.html?p=combustion-inc" },
  { title:"Buying a Franchise",      subtitle:"Steri-Clean Collection",                 thumb:"assets/thumbs/buying-a-franchise.png", href:"collection.html?c=steri-clean" },
  { title:"HGTV",                    thumb:"assets/thumbs/hgtv.png",                    href:"project.html?p=hgtv-rehabbers" },
  { title:"Broadcast Television",    thumb:"assets/thumbs/sirflips2.png",               href:"project.html?p=hgtv-mix" },
  { title:"Documentary",             thumb:"assets/thumbs/documentary.png",             href:"project.html?p=docu" },
  { title:"Digital Series",          thumb:"assets/thumbs/DigitalSeries.png",           href:"project.html?p=pbs" },
  { title:"International Production", thumb:"assets/thumbs/wall.png",                    href:"project.html?p=the-wall" },
  { title:"Political Advertising",   thumb:"assets/thumbs/political.png",               href:"project.html?p=political" },
  { title:"Hoarders",                thumb:"assets/thumbs/hoarders2024.png",            href:"project.html?p=hoarders" },
  { title:"Corporate Ads",           thumb:"assets/thumbs/alexa.png",                   href:"project.html?p=joule-yeti" },
  { title:"Fry Fidelity",            thumb:"assets/thumbs/fry-fidelity.png",            href:"project.html?p=fry-fiedelity" },
  { title:"Corporate Ads",           thumb:"assets/thumbs/corporate-steak.png",         href:"project.html?p=joule-steak" },
  { title:"Lost Lake Mystery",       thumb:"assets/thumbs/lost-lake.png",               href:"project.html?p=lost-lake" },
  { title:"Legacy List",             thumb:"assets/thumbs/legacy.png",                  href:"project.html?p=legacy-list-w-matt-paxton" },
  { title:"Weather vs. Climate",     thumb:"assets/thumbs/weather.png",                 href:"project.html?p=weather-v-climate" },
  { title:"Kitchen Crashers",        thumb:"assets/thumbs/kitchen-crashers.png",        href:"project.html?p=citchen-crashers-season-8" },
  { title:"Amazon Seller Forums",    thumb:"assets/thumbs/amazon.png",                  href:"project.html?p=amazon-sellers-foum" },
  { title:"Freaky Sweets",           thumb:"assets/thumbs/freaky-sweets.png",           href:"project.html?p=freaky-sweets" },
  { title:"Education",               thumb:"assets/thumbs/learntechne.png",             href:"project.html?p=learning-with-teche" },
  { title:"Adventure Capitalists",   thumb:"assets/thumbs/adventure.png",               href:"project.html?p=adventure-capitalist" },
  { title:"Ilove Virginia",          thumb:"assets/thumbs/loveposter.png",                    href:"project.html?p=I-Love-VA" },
];


/* =======================  COLLECTIONS  ===================== */
const COLLECTIONS = {
  "steri-clean": {
    title: "The Steri-Clean Collection",
    intro: "A series produced for Steri-Clean, covering the work, the crew, and the calls most people never see.",
    tiles: [
      { title:"Discovery Day",                thumb:"assets/thumbs/discovery-day.png",                href:"project.html?p=discovery-day", locked:true },
      { title:"Buying a Franchise",           thumb:"assets/thumbs/buying-a-franchise.png",           href:"project.html?p=buying-a-franchise" },
      { title:"True Crime Cleanup",           thumb:"assets/thumbs/true-crime-cleanup.jpg",           href:"project.html?p=true-crime-cleanup" },
      { title:"Hoarder Stories",              thumb:"assets/thumbs/hoarder-stories.jpg",              href:"project.html?p=hoarder-stories" },
      { title:"Training",                     thumb:"assets/thumbs/training.jpg",                     href:"project.html?p=training" },
      { title:"Murder and Suicide Cleanup",   thumb:"assets/thumbs/murder-and-suicide-cleanup.png",   href:"project.html?p=murder-and-suicide-cleanup" },
      { title:"Body Decomposition",           thumb:"assets/thumbs/body-decomposition.png",           href:"project.html?p=body-decomposition" },
      { title:"Drug Cleanup",                 thumb:"assets/thumbs/drug-cleanup.png",                 href:"project.html?p=drug-cleanup" },
      { title:"Client Stories",               thumb:"assets/thumbs/client-stories.png",               href:"project.html?p=client-stories" },
      { title:"Animal Waste Removal",         thumb:"assets/thumbs/animal-waste-removal.png",         href:"project.html?p=animal-waste-removal" },
      { title:"Pigeon Cleanup and Deterrent", thumb:"assets/thumbs/pigeon-cleanup-and-deterrent.png", href:"project.html?p=pigeon-cleanup-and-deterrent" },
      { title:"Odor Removal",                 thumb:"assets/thumbs/odor-removal.png",                 href:"project.html?p=odor-removal" }
    ]
  }
};


/* ====================================================================================  PROJECTS  =========================================================================================================================== */
const PROJECTS = [


/* ======================== ROW 1  01 Shenandoah   ======================= */
  { slug:"shenandoah-documentary",           
  title:"Shenandoah",                   
  category:"Documentary",             
  description:"Documentary for Virginia Public Media and PBS. I was one of several videographers on this feature documentary, and shot three of its segments out in the Virginia landscape — working with natural light, terrain, and changing mountain conditions to capture the region the way it actually feels to be there. The goal on a project like this isn't a staged, polished-commercial look; it's authentic, place-driven footage that holds up for years and lets an audience picture themselves standing in it. Delivered broadcast-ready for national PBS distribution, professionally color-corrected and cut into the finished film. It's exactly the kind of outdoor field cinematography — real places, real conditions, evergreen value — that a destination lives or dies on. See more at pbs.org/show/shenandoah/", 
  video:{ type:"youtube", id:"4aUJHIzgrQs" }, 
  gallery:["assets/gallery/01_shenandoah/richmond-forum.png"],  
},

/* ========================  ROW 1 02 Williamsburg   ======================= */
  
  { slug:"colonial-williamsburg-foundation", 
  title:"Williamsburg Foundation",      
  category:"Institutional",     
  gallery:["assets/gallery/02_williamsburg/will_01.jpeg","assets/gallery/02_williamsburg/will_02.jpeg"],      
  description:"When the Colonial Williamsburg Foundation opened the 40,000-square-foot Campbell Archaeology Center in April 2026 — a signature project for America's 250th anniversary, and the only facility in the country to put both a working archaeology lab and its artifacts on public display, stewarding a collection of nearly 60 million objects — I was the videographer and editor behind its permanent video installation. The piece plays across four screens built from eight 75-inch panels mounted vertically, shot entirely in 8K: high-resolution capture composed specifically for vertical presentation, and finished to run continuously — every day, in a world-class museum — rather than for a single campaign. Much of it was shot outdoors, on location across Colonial Williamsburg's public park grounds and historic green spaces — combining ground-based field capture with aerial drone cinematography over the grounds, working in natural light and real, changing conditions to capture the setting authentically, the way a visitor actually experiences it. Everything in 8K, professionally color-corrected and edited, composed for vertical display, and built as a permanent, evergreen asset the institution will run for years. Outdoor, aerial and ground, high-resolution, vertical-first, and made to last — the same standard a destination content library lives on. It's exactly what destination work depends on. Contractually I can't post the video — but it's better in person anyway. Plan your visit at colonialwilliamsburg.org.",
 },


/* ========================  ROW 1 03 City B roll   ======================= */

  { slug:"city",                             
  title:"City B-Roll",                  
  category:"Cinematography",          
  description:"A short-form series exploring the character of Richmond's neighborhoods for a central-Virginia client — capturing the streets, corridors, and everyday texture that give each part of the city its own feel. Shot and composed for 9:16 social from the ground up, in real light and real conditions, built to make a viewer want to go see the place for themselves. Local Virginia storytelling, delivered in the exact vertical format destination content lives on today.",
    videos: [
    { type:"youtube", id:"laXbj7-Bl78" },
    { type:"youtube", id:"DXpgAoT3aNA" },  
    ]
  },
 

/* ========================  ROW 1 04 Forum   ======================= */

  { slug:"forum",                            
  title:"The Richmond Forum",           
  category:"Broadcast / PBS",         
  description:"The Richmond Forum is a dynamic speaker series located in Richmond, Virginia, designed to foster engaging conversations and drive community connection. Bringing together influential local leaders, experts, and innovators, this forum provides a platform for exploring diverse topics ranging from social justice to economic development and cultural enrichment. Each event encourages thought-provoking discussions, inspiring attendees to gain new insights into the evolving landscape of Richmond. With a commitment to inclusivity and open dialogue, the Richmond Forum enriches civic life, creating a space for meaningful exchanges that empower community members and spark transformative ideas across the region.", 
  gallery:[
    "assets/gallery/03_forum/forum001.png",
    "assets/gallery/03_forum/forum002.png",
    "assets/gallery/03_forum/forum003.png",
    "assets/gallery/03_forum/forum004.png",
    "assets/gallery/03_forum/forum005.png",
    "assets/gallery/03_forum/forum006.png",
    "assets/gallery/03_forum/forum007.png",
    "assets/gallery/03_forum/forum008.png",
    "assets/gallery/03_forum/forum009.png",
    "assets/gallery/03_forum/forum010.png",
    "assets/gallery/03_forum/forum011.png",
    "assets/gallery/03_forum/forum012.png",
    "assets/gallery/03_forum/forum013.png",
    "assets/gallery/03_forum/forum014.png",
    "assets/gallery/01_shenandoah/richmond-forum.png",
    ],  
},
 
/* ======================== ROW 2 05 Location Drone   ======================= */

  { slug:"drone",                           
   title:"Location Drone Reel",          
   category:"Aerial",                  
   description:"From the bright lights of New York City to the golden coasts of California, our drones have captured stunning stories in every corner of America. We've filmed in bustling downtowns, quiet mountain towns, rolling farmland, and rugged coastlines — all on the move for clients who trust us to bring their vision to life. Our schedule takes us across the country to deliver cinematic, drone-driven footage that transforms locations into unforgettable stories.", 
   video:{ type:"vimeo", id:"1010025895" }, 

 },
 


/* ======================== ROW 2 06 Combustion   ======================= */


  { slug:"combustion-inc",                   
  title:"Combustion Inc",               
  category:"Corporate",               
  description:"Chris Young compares the Pacojet and the Ninja Creami. When it comes to turning frozen ingredients into silky-smooth desserts, two machines dominate the conversation: the Pacojet and the Ninja Creami. In a recent YouTube video, Chris Young of Combustion Inc. broke down the strengths and weaknesses of both, offering a rare side-by-side comparison that cuts through the hype. The Pacojet, long considered the gold standard in professional kitchens, has unmatched precision and produces luxuriously fine textures. But it comes with a serious price tag and is designed with restaurant-scale operations in mind. The Ninja Creami, on the other hand, is accessible to home cooks, relatively affordable, and surprisingly versatile. While it doesn't quite reach the same level of refinement as the Pacojet, it delivers impressive results for its price point — making frozen sorbets, gelato, and ice cream within minutes. The video highlights Chris Young's deep technical understanding of food science while giving viewers a practical, honest assessment: professionals may still lean on the Pacojet, but the Ninja Creami opens doors for experimentation in everyday kitchens. I had the privilege of producing, directing, and editing this video, ensuring the visuals matched the clarity and precision of Chris's insights. It's a piece designed to inform, inspire, and spark debate among chefs and passionate home cooks alike.", 
  video:{ type:"youtube", id:"HCJsaPefl1c" } 
},

/* ======================== ROW 2 07 BuyingFranchise is a collection ======================= */





/* ======================== ROW 2 08 HGTV   ======================= */

  { slug:"hgtv-rehabbers",                   
  title:"Richmond Rehabbers",           
  category:"HGTV",                    
  description:"Richmond Rehabbers was a one-hour home renovation series created and executive produced by Jason Brewer. Set in the historic city of Richmond, Virginia, the show followed ambitious home flippers as they transformed neglected properties into stunning, market-ready homes. With a focus on both design and the challenges of real estate, Richmond Rehabbers brought local stories to life with the same sharp production values and storytelling that define all of our projects.",
  video:{ type:"youtube", id:"KAejJ3jH9t4" },

   },
  
/* ======================== ROW 3 09 MIX   ======================= */



  { slug:"hgtv-mix",                         
  title:"Sir Mix-A-Lot's House Remix",  
  category:"Broadcast Television",    
  description:"Sir Mix-A-Lot's House Remix was a one-hour series for HGTV created and executive produced by Jason Brewer. The show followed Grammy Award-winning artist Sir Mix-A-Lot as he took his passion for real estate and design into the world of house flipping. With his larger-than-life personality and a sharp eye for transformation, the series blended music, celebrity, and home renovation into an unforgettable HGTV project.",
  video:{ type:"youtube", id:"8H1CsHjmG2Y" },
   },
  
/* ======================== ROW 3 10 Documentary   ======================= */

  { slug:"docu",                             
  title:"Restraint and Seclusion",      
  category:"Documentary",             
  description:"Restraint and Seclusion is a powerful documentary examining the controversial use of restraint and seclusion practices in America's public schools. Through firsthand stories, expert insight, and investigative reporting, the film sheds light on how these practices impact students, families, and educators. Created to spark conversation and change, the documentary underscores the urgent need for safer, more compassionate approaches to student care and discipline.",
  video:{ type:"youtube", id:"3cYyr5kvz4w" },
   },
 

/* ======================== ROW 3 11 Zero Waste  ======================= */

  { slug:"pbs",                              
  title:"Zero Waste",                   
  category:"Digital Series",          
  description:"Zero Waste is part of PBS's Science Matters climate change programming, exploring how circular design can help reduce waste and transform how we use resources. The series highlights innovators, communities, and industries rethinking materials to recycle, repurpose, and reuse — moving toward a world where nothing is wasted. With practical examples and inspiring stories, Zero Waste shows how the goal of wasting nothing is not only possible, but essential for a sustainable future.", 
  video:{ type:"youtube", id:"kupiMqNBuQA" }, 
},

/* ======================== ROW 3 13 The WAll International Production ======================= */

  { slug:"the-wall",                         
  title:"The Wall",                     
  category:"International Production", 
  description:"The Wall was a three-part documentary series produced by Screaming Flea Productions in Seattle and commissioned by Discovery Latin America. The series explored Friendship Park, a unique meeting place along the U.S.–Mexico border in San Diego, where families and friends divided by immigration policy gather at the wall. Through intimate stories and personal perspectives, The Wall shed light on human connection, resilience, and the complexities of life at the border.",
  video:{ type:"vimeo", id:"306288438#t=7" },

   },
 
/* ======================== ROW 4 14 The Political  ======================= */

  { slug:"political",                        
  title:"Political Advertising",        
  category:"Advertising",             
  description:"Kenya Gibson ran a successful campaign for Richmond City Council's 3rd District, winning the seat in the November 5 election. As a former Richmond School Board member, her victory reflects a deep commitment to public service and community leadership. We're proud to have contributed to this effort and love being part of campaigns that matter. From local races to national initiatives, our team thrives on helping candidates connect with voters through powerful video campaigns that move people to action.",
  video:{ type:"vimeo", id:"1016739290" },
   },
  
/* ======================== ROW 4 15 Hoarders  ======================= */


  { slug:"hoarders",                         
  title:"Hoarders",                     
  category:"A&E",                     
  description:"Hoarders is the Emmy-nominated A&E series that has run for 16 seasons, documenting the challenges and breakthroughs of people struggling with compulsive hoarding. Jason Brewer began working on the show in Season 1 and, in later seasons, contributed to the successful two-hour reboot episodes — helping craft treatments, pitches, and budgets that extended the series for an additional six years. His work on Hoarders reflects a deep experience in developing compelling, emotionally resonant unscripted television.",
  video:{ type:"youtube", id:"_b76FleszLk" },
   },
 
/* ======================== ROW 4 16 cor ads  ======================= */


  { slug:"joule-yeti",                       
  title:"Joule + Amazon Alexa",        
   category:"Corporate Ads",           
   description:"This video was part of a three-part series created for ChefSteps' Joule Sous Vide, an innovative smart cooking device from the Seattle-based food tech startup. Guided by Alex, the series walked users step by step through the setup process, making advanced cooking accessible to home chefs. By combining clean visuals, clear instruction, and engaging storytelling, the project helped Joule stand out as a sleek, approachable tool in the growing world of smart kitchen technology.",
   video:{ type:"youtube", id:"8fzHqKJp_ds" },
    },
  

/* ======================== ROW 4 17 FriFidelity  ======================= */

  { slug:"fry-fiedelity",                    
  title:"Fry Fidelity",                 
  category:"Corporate",               
  description:"“Fry Fidelity: How to Fry Chicken with Chris Young from ChefSteps” became a viral sensation, racking up millions of views. In this fan-favorite video, Chris breaks down the science and craft of frying chicken to perfection, blending precision cooking with irresistible comfort food. His step-by-step guidance, ChefSteps flair, and crisp golden results captivated home cooks and food lovers around the world, making it one of the platform's most iconic tutorials. Jason Brewer wrote, directed and edited this project.", 
  video:{ type:"youtube", id:"wXsgWJmgb0Q" } 
},


/* ======================== ROW 5 18 CorAds2  ======================= */


  { slug:"joule-steak",                      
  title:"Joule by ChefSteps",          
  category:"Corporate Ads",           
  description:"As part of Joule Sous Vide's customer education series, this video showed home cooks how to achieve a flawless steak every time using smart sous vide technology. With step-by-step guidance, mouthwatering visuals, and Joule's sleek app integration, the piece demonstrated both precision and simplicity. Designed to inspire confidence, it positioned Joule as the go-to tool for restaurant-quality results at home — helping drive excitement and adoption of the product among everyday cooks.",
  video:{ type:"youtube", id:"GJKXYABapeE" },
   },
  


/* ======================== ROW 5 19 lostlake  ======================= */
  { slug:"lost-lake",                        
  title:"Lost Lake Mystery",            
  category:"Discovery Channel",       
  description:"Lost Lake was a documentary project created by Jason Brewer while at Screaming Flea Productions and commissioned by Discovery Channel. The film follows a group of cousins who believe they are descendants of the infamous pirate Jean Laffite. Armed with family documents and lore, they set out on a modern-day quest in search of lost treasure. Blending history, adventure, and family intrigue, Lost Lake delivered the kind of high-stakes storytelling that captures both imagination and curiosity.",
  video:{ type:"youtube", id:"0BGJB-2lIII" },
   },
 
/* ======================== ROW 5 20 legacyList  ======================= */
  { slug:"legacy-list-w-matt-paxton",        
  title:"Legacy List with Matt Paxton", 
  category:"PBS",                     
  description:"Legacy List with Matt Paxton is a nationally broadcast PBS series that helps families preserve memories and uncover hidden treasures as they downsize their homes. Jason Brewer served as Post Production Supervisor, overseeing the edit pipeline, managing teams of remote editors and assistants, and ensuring every episode met PBS's technical and storytelling standards. His role was central in delivering the polished, heartfelt episodes that have made Legacy List a beloved public television program.",
  video:{ type:"youtube", id:"HqmdLfbQXZw" },
   },
 
/* ======================== ROW 5 21 WeatherVClimate  ======================= */
  { slug:"weather-v-climate",                
  title:"Weather vs. Climate",          
  category:"PBS",                     
  description:"As part of PBS's Science Matters initiative, this climate change series explores the critical distinction between weather and climate. Through clear science communication, engaging visuals, and expert interviews, the program helps audiences understand how short-term weather patterns differ from long-term climate trends — and why that distinction matters in the fight against global warming. Designed to inform and inspire, the series empowers viewers with knowledge to engage in today's most urgent environmental conversations.", 
  video:{ type:"vimeo", id:"1155070963" } 
},


/* ======================== ROW 6 22 KitchenCrashers=  ======================= */
  { slug:"citchen-crashers-season-8",        
  title:"Kitchen Crashers, Season 8",   
  category:"HGTV",                    
  description:"Kitchen Crashers was a hit DIY Network series where unsuspecting homeowners were surprised with dramatic kitchen makeovers. Jason Brewer served as Supervising Producer for Season 8 in Las Vegas, overseeing fast-paced renovation builds from start to finish. He managed production in the field, guided story development, and worked closely with editors to shape engaging episodes — bringing the excitement and transformation of each project to life for viewers nationwide.", 
  video:{ type:"youtube", id:"XtD23rOXpLk" }
},

/* ======================== ROW 6 23 KitchenCrashers=  ======================= */

  { slug:"amazon-sellers-foum",              
  title:"Amazon Seller Forums",         
  category:"Corporate",               
  description:"The Amazon Sellers Forum was created to help sellers connect, learn, and grow within the Amazon ecosystem. This video project was designed to bridge a critical communication gap between Amazon.com and its vast network of independent sellers. By highlighting resources, tools, and support systems, the piece encouraged sellers to take full advantage of the opportunities available to them while fostering trust in Amazon's commitment to their success. Jason Brewer and his team produced the video to be clear, engaging, and visually dynamic — translating complex processes into easy-to-follow messaging. The result was a powerful communication tool that not only solved Amazon's challenge of reaching thousands of sellers at once but also reinforced the value of participating in the Sellers Forum. This project is a strong example of how video can simplify corporate messaging, scale outreach, and help global brands better serve their communities.",
   },
 

/* ======================== ROW 6 24 FreakySweets  ======================= */

  { slug:"freaky-sweets",                    
  title:"Freaky Sweets",                
  category:"Culinary",                
  description:"Freaky Sweets was a three-part Halloween cooking series on Food Network, created by Jason Brewer while at Screaming Flea Productions. The show brought a spooky twist to the culinary world, featuring pastry chefs and sugar artists competing to craft eerie, over-the-top desserts and edible creations. With its mix of festive fun, competition, and jaw-dropping artistry, Freaky Sweets delivered the perfect blend of Halloween spirit and Food Network flair.", 
  video:{ type:"vimeo", id:"306282972" } 
},


/* ======================== ROW 6 25 Education ======================= */
  { slug:"learning-with-teche",              
  title:"Learning with Technie",        
  category:"Education",              
  description:"Learning with Technie was a six-part PBS educational series created to introduce children to technology in a fun and approachable way. Featuring “Technie,” a friendly animated character, the program guided kids through the basics of using computers, exploring digital tools, and imagining what technology can do. By blending engaging animation with hands-on learning, Learning with Technie encouraged curiosity and built confidence — helping young audiences develop essential skills for a digital world.",
  video:{ type:"vimeo", id:"LNrY9J5Qs-A" } 
    },
 

/* ======================== ROW 7 26 Adventurcap ======================= */
  { slug:"adventure-capitalist",             
  title:"Adventure Capitalists",        
  category:"Series",                  
  description:"Adventure Capitalist was a CNBC original series created by the development team at Screaming Flea Productions, led by Jason Brewer. The show followed investors as they traveled to remote and rugged locations to test daring new products designed for outdoor adventure. Combining entrepreneurship with exploration, Adventure Capitalist highlighted both the risks and rewards of innovation — showcasing how bold ideas can thrive in some of the world's most extreme environments.", 
  video:{ type:"vimeo", id:"306291724" }
   },



/* ======================== ROW 7 27 Love Virginia ======================= */
  { slug:"I-Love-VA",             
  title:"AI Love Virginia",        
  category:"Broadcast",                  
  description:"Adventure Capitalist was a CNBC original series created by the development team at Screaming Flea Productions, led by Jason Brewer. The show followed investors as they traveled to remote and rugged locations to test daring new products designed for outdoor adventure. Combining entrepreneurship with exploration, Adventure Capitalist highlighted both the risks and rewards of innovation — showcasing how bold ideas can thrive in some of the world's most extreme environments.", 
  video:{ type:"youtube", id:"P_DVn_OL6vk" }
   },




  /* ---- Steri-Clean collection ---- */
  { slug:"discovery-day",                title:"Discovery Day",                category:"Steri-Clean Collection", locked:true, description:"Add the write-up for this project here." },
  { slug:"buying-a-franchise",           title:"Buying a Franchise",           category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"true-crime-cleanup",           title:"True Crime Cleanup",           category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"hoarder-stories",              title:"Hoarder Stories",              category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"training",                     title:"Training",                     category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"murder-and-suicide-cleanup",   title:"Murder and Suicide Cleanup",   category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"body-decomposition",           title:"Body Decomposition",           category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"drug-cleanup",                 title:"Drug Cleanup",                 category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"client-stories",               title:"Client Stories",               category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"animal-waste-removal",         title:"Animal Waste Removal",         category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"pigeon-cleanup-and-deterrent", title:"Pigeon Cleanup and Deterrent", category:"Steri-Clean Collection", description:"Add the write-up for this project here." },
  { slug:"odor-removal",                 title:"Odor Removal",                 category:"Steri-Clean Collection", description:"Add the write-up for this project here." }
];


/* Expose to app.js — leave these lines alone. */
window.HOME = HOME;
window.COLLECTIONS = COLLECTIONS;
window.PROJECTS = PROJECTS;
