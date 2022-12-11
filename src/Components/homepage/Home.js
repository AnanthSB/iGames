import React from 'react'
import { useState } from 'react';
import Slides from "./slidesComp/Slides.js";
import HomePageCardItemsComp from "./HomePageCardItemsComp/HomePageCardItemsComp.js";

export default function Home(props) {
    const [cardItemsData, setCardItemsData] = useState([...props.cardItemsData])
    const list = [
      {
        id: 1,
        name: "Pubg",
        content: "Also hailing from Sweden, Levinho became the first PUBG Mobile content creator to reach 1B views on YouTube. He uploads highlights and montages along with unboxings and troll videos and is one of the most entertaining creators on YouTube",
        images: "https://wallpaperaccess.com/full/825336.jpg",
        price: "20",
        category: "War",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "5",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 2,
        name: "Freefire",
        content: "Free Fire is a battle royale shooting game. Each game places 50 players on a single island, where they can explore the vast map, hide in the wild, or seek to eliminate enemy players in order to be the last person surviving on the island. Aside from battle royale, ",
        images: "https://i.pinimg.com/736x/f9/49/ba/f949ba12333108034467fcf68a761eb4.jpg",
        price: "20",
        category: "War",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 4,
        name: "Art of war",
        content: "efinition. The Art of War (Sunzi bingfa) is a 5th-century BCE military treatise written by the Chinese strategist Sun-Tzu (aka Sunzi or Sun Wu). Covering all aspects of warfare",
        images: "https://pbs.twimg.com/media/EbQ1oAHXsAIoHUy.jpg:large",
        price: "20",
        category: "War",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "5",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 5,
        name: "World war",
        content: "Battle of Empires: 1914-1918 is a series of tactical real-time strategy campaigns available in single player, co-op, and multiplayer, which tell the story of one of the bloodiest wars in mankind's history - The First World War.",
        images: "https://wallpaperaccess.com/full/3808226.jpg",
        price: "10",
        category: "War",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "3",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 6,
        name: " Candy crush",
        content: "Candy Crush Saga is a game, where the core gameplay is based on swapping two adjacent candies among several on the gameboard as to make a row or column of at least three matching-colored candies.",
        images: "https://wallpaperaccess.com/full/3060297.jpg",
        price: "10",
        category: "soft",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 7,
        name: "Ice prince wedding day ",
        content: "The beautiful Ice Princess has chosen her Prince Charming and wedding bells are ringing! Become the best wedding planner around and give the royal couple the wedding of their dreams. Design a magical icy wedding hall, dress the princess up in a stunning wedding gown, and let them dance the night",
        images: "https://i.ytimg.com/vi/-R4dM2PWotU/maxresdefault.jpg",
        price: 8,
        category: "soft",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "3",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 8,
        name: "My town school game",
        content: "What is my town about Play city games together with friends on the same map! Together you can make amazing stories and customize buildings and streets! Decide how your town will look alike. Build your own city rules and roleplay cool city games with friendsBubble Shooter is a clone of the Puzzle Bobble arcade game that was released by Taito in 1994. The Bubble Shooter game and IP are owned by Ilyon Dynamics, after they were acquired from Absolutist who released the original game in 2002. The game was ported to iOS in 2010, and was ported to Android",
        images: "https://i.ytimg.com/vi/90VvUH-GUUY/maxresdefault.jpg",
        price: "5",
        category: "soft",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "5",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 9,
        name: "Tertis",
        content: "By embracing our universal desire to create order out of chaos, the Tetris® game provides intellectual sport that combines continuous fun with mental stimulation.  As one of the most recognizable and influential video game brands in the world, it’s no wonder why there are hundreds of millions of Tetris products being played, worn, and enjoyed by fans in their everyday lives. For over thirty-five years, the game and brand have truly transcended the barriers of culture and language, resulting in a fun a",
        images: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/cW5lDBG/colorful-3d-tetris-games-blocks-fall-down-on-a-pink-background-vintage-game-concept_heyvwneql_thumbnail-180_01.jpg",
        price: "7",
        category: "soft",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "5",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 10,
        name: "Rescue cats rescue run resuce animals",
        content: "The Wild Kratts are to the creature power rescue! Run, jump, fly, and swim through 24 action-packed levels, rescue animals to unlock information about each one in the Creaturepedia, and face-off against villains to keep the animals safe from harm. Learn about animals and their habitats while using problem solving skills to choose different creature power suits, each with their own unique creature power!",
        images: "https://i.ytimg.com/vi/-8qWWf4LBrY/maxresdefault.jpg",
        price: "6",
        category: "soft",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "3",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 11,
        name: "Race master -3d car",
        content: "This sounds good but it is not possible for everyone to become one. So, for those who couldn’t become racers for them car racing video games became the way to feel that power and control. Car racing games were introduced in 1960s. The first game of racing was Grand Prix, a first-person view game released by Sega. With the time being, till 1990s, this genre of games gained popularity with the games like Need for Speed and Mario Kart 64.",
        images: "http://oceanofgames.com/wp-content/uploads/2021/07/Mini-Racing-World-DARKSiDERS-Free-Download-1-OceanofGames.com_.jpg.webp",
        price: "8",
        category: "racing",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "3",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 12,
        name: "Real bike racing",
        content: "Real Bike Racing is a must have game for all motor bike riders! Start the engine, hit the gas and experience the thrill of handling a 200 HP beast. Go bumper to bumper with elite riders to win the world championship",
        images: "https://games.lol/wp-content/uploads/2021/05/real-bike-racing-download-PC-1024x572.jpg",
        price: "8",
        category: "racing",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "5",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 13,
        name: "Apshalt",
        content: "Asphalt is a series of racing video games developed and published by Gameloft. Games in the series typically focus on fast-paced arcade racing set in various locales throughout the world, tasking players to complete races while evading the local law enforcement in police pursuits",
        images: "http://cdn.gsmarena.com/pics/13/08/airborne-review/gsmarena_001.jpg",
        price: "7",
        category: "racing",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 14,
        name: "Racing car 2",
        content: "Racing in Car 2 might be the game you are looking for. You drive your car in cockpit view through the endless traffic and realistic environment. Go as fast as possible, overtake traffic cars, earn coins and buy new cars. Eventually, become the king of the global leaderboards",
        images: "https://img.utdstc.com/screen/77f/7ee/77f7eed41db0cca3983eeb61e13b2f371ad4a64b33275da73768be1518759a3f:200",
        price: "6",
        category: "racing",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 15,
        name: "Music race gt",
        content: "Simulation style racing games strive to convincingly replicate the handling of an automobile. They often license real cars or racing leagues, but will sometimes use fantasy cars built to resemble real ones if unable to acquire an official license for them. Vehicular behavior physics are a key factor in the experience. The rigors of being a professional race driver are usually also included (such as having to deal with a car's tire condition and fuel level). Proper cornering technique and precision racing maneuvers (such as trail braking) are given priority in simulation racing games.",
        images: "https://play-lh.googleusercontent.com/VCA_PdiRzvrl0XmCYfCR2Dvm_1157EkpYCPPbBUzp5Vmskco4OQUankwtx5VMGLJEhVb=w412-h220-rw",
        price: "10",
        category: "racing",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "5",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      // {
      //   id: 16,
      //   name: "Wire less bt 4.0",
      //   content: "An efficient gaming controller can make a huge difference in your gaming capabilities. It helps you to improve your gaming skills and provide smooth control while playing video games. The modern gaming controllers are wireless and powered by batteries",
      //   images: "https://rukminim2.flixcart.com/images/416/416/kwxv98w0/code-in-the-box-game/r/7/c/pc-aoko-v8-wireless-bt4-0-bluetooth-wireless-gaming-controller-original-imag9g85shghcywp.jpeg?q=70",
      //   price: "20",
      //   category: "tools",
      //   rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      //   rating1: "5",
      //   systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      // }
    ];
    const list2 = [
      {
        id: 17,
        name: "Gaming monitor",
        content: "Gaming monitors are designed to make the output of your graphics card and CPU look as good as possible while gaming. They're responsible for displaying the final result of all of your computer's images rendering and processing, yet they can vary widely in their representation of color, motion, and images sharpness.",
        images: "https://www.newegg.com/insider/wp-content/uploads/2019/04/digital-pc-monitoring-tools-7.jpg",
        price: "50",
        category: "tools",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "5",
  
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      // {
      //   id: 18,
      //   name: "Pc-4",
      //   content: "When you fire up Epic Games Store, Steam, Xbox, or any of the other digital marketplaces for PC games, you'll be faced with many purchasing options. Feel like leveling characters in a role-playing game? Disco Elysium: The Final Cut and The Witcher III: Wild Hunt got what you need. In the mood to knuckle up against online opponents? A fighting game like Guilty Gear Strive or The King of Fighters XV will do you good. In short, the PC gaming space is deep and varied. Don't get frozen by choice, though; use this guide to help you make a swift and wise purchasing decision.",
      //   images: "https://rukminim1.flixcart.com/images/612/612/kq18n0w0/code-in-the-box-game/4/m/l/pc-4k-ultra-hd-gaming-controller-with-game-stick-tv-video-game-original-imag453as3haqcsy.jpeg?q=70",
      //   price: "12",
      //   category: "tools",
      //   rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      //   rating1: "5",
  
      //   systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      // },
      {
        id: 19,
        name: "Gaming pad",
        content: "What is a gaming pad used fo A gamepad is used for playing video games of a number of types including role playing, shooting, puzzle, sports and others. Modern-day video game controllers are wireless, while most earlier models were designed with cords that connected them to the systems",
        images: "https://media.wired.com/photos/5e2b584b097df7000896da1b/master/w_1600,c_limit/Gear-Scuf-Infinity4PS-Pro-Source-Scuf.jpg",
        price: "12",
        category: "tools",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
  
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 20,
        name: "Gaming stick",
        content: "Gaming device is any device which is used directly or indirectly in conducting a game. It is designed for playing a game for money or a prize. Gaming device is used solely for the purposes of amusement or entertainment or gambling. Gaming device can be mechanical, electromechanical or electronic equipment.",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnhKQqqPzhipigcSduHWoHMq1zREBa3crag&usqp=CAU",
        price: "15",
        category: "tools",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "5",
  
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 21,
        name: "Ocean fighter",
        images: "http://oceanofgames.com/wp-content/uploads/2020/02/Street-Fighter-V-Champion-Edition-CODEX-Free-Download-2-OceanofGames.com_.jpg.webp",
        content: "The Backrooms soon became popular from writers and Internet users, most of which commented on its uncannyness. The creepypasta has also been cited as the origin and most-well known example of the liminal spaces Internet trend, which are photos that evoke a sense of nostalgia, lostness, and uncertaintyliminalspaces' tag has amassed nearly 100 million views on the social media platform TikTok.[6] When a woman named Claire Scheulin found an abandoned mall below her Airbnb, Internet commentators compared her photos of the place to the original Backrooms images",
        price: "20",
        category: "War",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 22,
        name: "The back room project",
        images: "https://external-preview.redd.it/Jh0uavaUr-h_Hps-v5iyTZfA8_V01UJZ5XCJ8yjwTKo.jpg?auto=webp&s=e23e008461d891a44b19fb4c954f52cb7269c386",
        price: "20",
        category: "War",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 23,
        name: "Ben ten figting game",
        images: "https://cn.i.cdn.ti-platform.com/content/710/alien-rivals/game/za/alienrivals-1280x720-screenshot.a5cd58fe.jpg",
        price: "22",
        content: "The series is about a 10-year-old boy named Ben Tennyson who gets a watch-style alien device called the Omnitrix. Attached to his wrist, it allows him to transform into 10 different alien creatures with different abilities, allowing him to fight evil from Earth and space with his cousin Gwen and grandfather Max.",
        category: "War",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 24,
        name: "Mr boom fire works factory",
        images: "https://www.firework-factory.com/wp-content/uploads/2019/04/Level12-1.jpg",
        price: "12",
        content: "Move Mr Boom’s firework crates from the machines to the exit without destroying them in this fast puzzle game. Beware though, as nothing is quite what it seems in the Firework Factory! This is an extremely fast moving, unforgiving puzzle game which requires lightning fast reactions and quick thinking to avoid disaster. We are not responsible for any flipped desks, broken screens, destroyed gamepads, or frustration you may experience trying to finish this game!",
        category: "soft",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 25,
        name: "Super land six inches game",
        images: "https://cdn.akamai.steamstatic.com/steam/apps/1522870/capsule_616x353.jpg?t=1642256171",
        content: "Supraland Six Inches Under is a First-Person-Metroidvania. That means, youre in a gated world and the more abilities you gather, the more parts of the world you can access. You don t need to have played other Supraland games before you play thisThe gameplay consists of roughly 55% exploration, 40% solving puzzles and 5% combat. The adventure will take between 8-20 Has absolutely zero skilltrees ",
        price: "15",
        category: "soft",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 26,
        name: "Cardpocalypse SKIDROW ",
        images: "http://oceanofgames.com/wp-content/uploads/2019/09/Cardpocalypse-SKIDROW-Free-Download-1-OceanofGames.com_.jpg.webp",
        price: "17",
        content: "Cardpocalypse is a single-player card game where you change the cards and the rules as you play, delivered within a charming school-based narrative.Join 10-year-old Jess and her friends on the worst day ever. Everyone in school is obsessed with ‘Mega Mutant Power Pets’, the hit card game based on their favorite show! A little too obsessed ",
        category: "soft",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 27,
        name: "circuit super star",
        images: "https://cdn.akamai.steamstatic.com/steam/apps/1097130/header.jpg?t=1653783720",
        content: "A top-down racing game built by racing fans, for racing fans. CIRCUIT SUPERSTARS is a top-down racer built by racing fans, for racing fans - celebrating generations of motorsport, focusing on driving that feels great; but with a high skill ceiling, that will have players spending hours honing their perfect lap.",
        price: "22",
        category: "racing",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "5",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 28,
        name: "Super toy car",
        images: "https://cdn.akamai.steamstatic.com/steam/apps/1028840/capsule_616x353.jpg?t=1589450943",
        content: "Super Toy Cars is a tabletop arcade combat racing game featuring fast and cool looking cars, impressive tracks made of everyday objects and a bunch of power-ups that will let you destroy your opposition.",
        price: "17",
        category: "racing",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 29,
        name: "Nascar 21 ignition",
        images: "https://gepig.com/game_cover_460w/7133.jpg",
        content: "THE OFFICIAL NASCAR VIDEO GAME NASCAR 21: Ignition redefines the official video game of the world's most popular stock car racing series. With incredible graphics and immersive gameplay, NASCAR 21: Ignition brings a whole new level of authenticity and atmosphere to the NASCAR Cup Series",
        price: "21",
        category: "racing",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 30,
        name: "pc game gear",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvX9J36cZJJ-FSqVsvYCYQFWORc9WuA-853w&usqp=CAU",
        price: "30",
        content: "pc gaming gear companies We focus on providing high-quality products such as pc gaming gear companies together with customer service. Any requirement for customization, MOQ, delivery, etc. will be fully met at Meetion Gaming Accessories. ",
        category: "tools",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      },
      {
        id: 31,
        name: "Driving similation chair ",
        images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBsWdW4DXS3bzseeVLHWmtJ4K92QUF7joJjsUB-WwTnbAaLcykRj74J7ceDhLf8sWYQY&usqp=CAU",
        price: "18",
        content: " racing video game may only cost $50, but driving simulators come at a significantly higher cost: educational models can start at $7,000, while research models can run up to hundreds of thousands of dollars.",
        category: "tools",
        rating: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
        rating1: "4",
        systemrequirment: "System Requirements of  Download make sure your PC meets minimum system requirements. Minimum: * OS: Windows 2000 / XP / Vista / 7 / 8 / * Processor: Intel Core2 Duo or highe * Memory: 4 GB RAM   * Graphics: Open GL compliant video card * Storage: 200 MB available space"
      }
    ];

    const barHeading1 = "Popular Games";
    const barHeading2 = "Games You May like";
    return (
        <>
        <div className='bg-black'>
            <Slides/>

            {/* this component requires an uniqueId*,array list, BarHeading */}
            <HomePageCardItemsComp list={list} barHeading={barHeading1}  uniqueId={Math.round(Math.random*100)+"_"+Math.round(Math.random*100)}/>
            <HomePageCardItemsComp list={list2} barHeading={barHeading2}  uniqueId={Math.round(Math.random*100)+"__"+Math.round(Math.random*100)}/>
            {/* <HomePageCardItemsComp list={cardItemsData} barHeading={barHeading1}  uniqueId={Math.round(Math.random*100)+"_"+Math.round(Math.random*100)}/> */}
        </div>
        </>
  )
}
