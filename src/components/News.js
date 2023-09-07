import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 15,
    category: "general",
  };
  static PropTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [
    {
      source: {
        id: null,
        name: null,
      },
      author: null,
      title: null,
      description: null,
      url: null,
      urlToImage: null,
      publishedAt: null,
      content: null,
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Andrew Jeong",
      title:
        "CDC warns health-care professionals about Vibrio vulnificus bacteria - The Washington Post",
      description:
        "The CDC said many infections from Vibrio vulnificus — which has killed at least 13 this year — are acquired after an open wound is exposed to warm coastal waters.",
      url: "https://www.washingtonpost.com/health/2023/09/02/cdc-vibrio-vulnificus-bacteria/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UL47DDEJTVWQ2YSRLWACQX2AAU.JPG&w=1440",
      publishedAt: "2023-09-02T06:45:31Z",
      content:
        "Comment on this story\r\nComment\r\nThe Centers for Disease Control and Prevention on Friday issued a national alert warning health-care professionals to watch out for infections of Vibrio vulnificus, a … [+2697 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Jackie Wattles",
      title: "India's launches first sun-studying spacecraft, Aditya-L1 - CNN",
      description:
        "India has launched its first spacecraft dedicated to studying the sun and space weather, right on the heels of its historic moon landing.",
      url: "https://www.cnn.com/2023/09/02/world/india-sun-probe-aditya-scn/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230901155258-aditya-l1-cleanroom.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-09-02T06:26:00Z",
      content:
        "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nIndia launched its first spacecraft dedicated to study… [+2344 chars]",
    },
    {
      source: {
        id: null,
        name: "YourTango",
      },
      author: "Valeria Black",
      title:
        "Every Chinese Zodiac Sign's Weekly Horoscope For September 4 - 10, 2023 - YourTango",
      description:
        "Each Chinese zodiac sign's weekly horoscope is here for September 4 - 10, 2023. Find out what's in store for you this week.",
      url: "https://www.yourtango.com/2023365828/chinese-zodiac-signs-weekly-horoscope-september-4-10-2023",
      urlToImage:
        "https://www.yourtango.com/sites/default/files/image_blog/chinese-weekly-horoscope-september-4-10-2023.png",
      publishedAt: "2023-09-02T05:34:28Z",
      content:
        "Your weekly Chinese zodiac sign horoscope for September 4 - 10, 2023 is here! First, let's look at the week's message for everyone. What has been gained? What has been lost? These are some questions … [+14742 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: null,
      title:
        "Novak Djokovic roars back from 2-set hole, tops Laslo Djere at US Open - ESPN",
      description:
        "Novak Djokovic got a stiffer test than expected Friday night, losing the first two sets before rallying to outlast fellow Serbian laslo Djere 4-6, 4-6, 6-1, 6-1, 6-3 in a third-round match at the US Open.",
      url: "https://www.espn.com/tennis/story/_/id/38310127/novak-djokovic-roars-back-2-set-hole-tops-laslo-djere-us-open",
      urlToImage:
        "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0902%2Fr1219031_1296x729_16%2D9.jpg",
      publishedAt: "2023-09-02T05:32:00Z",
      content:
        "NEW YORK -- Everyone should know by now to never count out Novak Djokovic. No matter how big a deficit he faces. No matter how poorly he might be playing.\r\nAnd so it made sense that Djokovic would ma… [+4872 chars]",
    },
    {
      source: {
        id: null,
        name: "GameSpot",
      },
      author: "Jason Rodriguez",
      title: "Starfield Guides Hub - GameSpot",
      description:
        "There's a whole galaxy for you to explore in Starfield, and our guides hub will help you every step of the way.",
      url: "https://www.gamespot.com/articles/starfield-guides-hub/1100-6517292/",
      urlToImage:
        "https://www.gamespot.com/a/uploads/screen_kubrick/1632/16320660/4186632-starfield2023-08-2918-11-24.png",
      publishedAt: "2023-09-02T05:22:58Z",
      content:
        "Starfield takes you on an adventure from one end of the universe to the other. With numerous characters and factions to meet, as well as countless planets to explore, you're bound to spend hours just… [+2382 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Barbie Latza Nadeau",
      title:
        "Outrage as mother of biscuit-stealing bear cub shot dead in Italy - CNN",
      description:
        "The cold-blooded killing of a mother bear known as Amarena has angered animal rights groups and local politicians in Italy.",
      url: "https://www.cnn.com/2023/09/02/europe/mother-bear-shot-dead-in-italy-abruzzo-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230901224505-mother-bear-shot-dead-italy-0826.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-09-02T05:12:00Z",
      content:
        "The cold-blooded killing of a mother bear known as Amarena has angered animal rights groups and local politicians in Italy.\r\nThe brown bear was shot by a local resident of San Benedetto dei Marsi jus… [+2489 chars]",
    },
    {
      source: {
        id: null,
        name: "WVTM13",
      },
      author: "Taylor Lang",
      title:
        "Walmart, Sam's Club store systems 'mistakenly charge' customers old and new grocery tax rates - WVTM13 Birmingham",
      description:
        'In a statement from Walmart, the communications office stated that the systems at Walmart and Sam\'s Club mistakenly charged customers across Alabama "both the old rate and the new rate at the time of sale."',
      url: "https://www.wvtm13.com/article/alabama-grocery-tax-charge/44977267",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/bananas-698608-1280-64f22d97c56eb.jpg?crop=1.00xw:0.846xh;0,0&resize=1200:*",
      publishedAt: "2023-09-02T04:22:00Z",
      content:
        "Video above: Get the Facts on the grocery tax \r\nOn the first day of the grocery sales tax cut in Alabama Friday, some shoppers were charged both rates at Walmart and Sam's Club checkouts.\r\nStay up-to… [+577 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Michael Schneider",
      title:
        "Kevin Costner Speaks Out About ‘Yellowstone’ Exit, Threatens to Sue Producers Over Salary - Variety",
      description:
        "“Yellowstone” star Kevin Costner is threatening to sue the show’s producers over money he believes he’s still owed from the series. The actor spoke publicly on Friday for th…",
      url: "https://variety.com/2023/tv/news/kevin-costner-yellowstone-exit-salary-1235711604/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2022/07/TV-Star-Salaries-Kevin-Costner-Yellowstone-2.jpg?w=1000&h=563&crop=1",
      publishedAt: "2023-09-02T04:13:00Z",
      content:
        "“Yellowstone” star Kevin Costner is threatening to sue the show’s producers over money he believes he’s still owed from the series. The actor spoke publicly on Friday for the first time about his fal… [+3252 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "Typhoon Saola makes landfall on China’s coast after slamming Hong Kong - Al Jazeera English",
      description:
        "Super Typhoon Saola weakens after making landfall on southern China’s Guangdong coast after pummelling Hong Kong.",
      url: "https://www.aljazeera.com/news/2023/9/2/typhoon-saola-makes-landfall-on-chinas-coast-after-slamming-hong-kong",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/09/image-2.jpg?resize=1920%2C1080&quality=80",
      publishedAt: "2023-09-02T03:41:37Z",
      content:
        "Typhoon Saola has made landfall in the southern Chinese province of Guangdong as violent winds lashed nearby Shenzhen, Hong Kong and Macau, leaving at least one dead and a trail of destruction and fl… [+2595 chars]",
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Bruce Haring",
      title:
        "Mohamed Al-Fayed Dies: ‘Chariots Of Fire’ Backer, Princess Diana Confidant, Harrod’s And Ritz Owner Was 94 - Deadline",
      description:
        "Mohamed Al-Fayed, whose world-spanning business career touched lives in Hollywood, Paris, London and his native Egypt, died Aug. 30 at 94. His considerable business successes included owning fabled…",
      url: "https://deadline.com/2023/09/mohamed-al-fayed-dead-chariots-of-fire-backer-princess-diana-confidant-harrods-and-ritz-owner-was-94-obituary-1235534573/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/09/GettyImages-72823293.jpg?w=1024",
      publishedAt: "2023-09-02T02:31:00Z",
      content:
        "Mohamed Al-Fayed, whose world-spanning business career touched lives in Hollywood, Paris, London and his native Egypt, died Aug. 30 at 94. \r\nHis considerable business successes included owning fabled… [+3014 chars]",
    },
    {
      source: {
        id: null,
        name: "SciTechDaily",
      },
      author: null,
      title:
        "Impact Crater From Russia's Luna 25 Crash Spied by NASA's Lunar Orbiter - SciTechDaily",
      description:
        "NASA's LRO imaged a new Moon crater, likely the impact site of Russia's Luna 25 mission, which deviated from its intended landing point due to a descent anomaly. NASA’s LRO – the Lunar Reconnaissance Orbiter – spacecraft imaged a new crater on the Moon’s surf…",
      url: "https://scitechdaily.com/impact-crater-from-russias-luna-25-crash-spied-by-nasas-lunar-orbiter/",
      urlToImage: "https://scitechdaily.com/images/Luna-25-Impact-Site.jpg",
      publishedAt: "2023-09-02T02:19:55Z",
      content:
        "ByNASA's Goddard Space Flight CenterSeptember 1, 2023\r\nThis GIF alternates between LRO views from June 27, 2020, and August 24, 2023 before and after the appearance of a new impact crater likely from… [+8461 chars]",
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Anthony D'Alessandro",
      title:
        "Meg Ryan’s Return To Romantic Comedy ‘What Happens Later’ Waits Out Incoming Taylor Swift Storm At Box Office - Deadline",
      description:
        "Meg Ryan was scheduled to return to her big-screen romantic comedy stomping ground on October 13, however, Taylor Swift spoiled it. No prob, the Ryan-directed and -starring holiday feature What Hap…",
      url: "https://deadline.com/2023/09/meg-ryan-what-happens-later-taylor-swift-1235534584/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/09/meg-ryan-david-duchovny-what-happens-later-082923-1-ed4d3590286f43cba63452e341676782.jpg?w=1024",
      publishedAt: "2023-09-02T02:14:00Z",
      content:
        "Meg Ryan was scheduled to return to her big-screen romantic comedy stomping ground on October 13, however, Taylor Swift spoiled it. No prob, the Ryan-directed and -starring holiday feature What Happe… [+1392 chars]",
    },
    {
      source: {
        id: null,
        name: "On3.com",
      },
      author: "Andrew Graham",
      title:
        "Matt Leinart predicts College Football Playoff teams, National Champions - On3.com",
      description:
        "Leinart picked his four-team CFP field on the Fox Big Noon Kickoff set on Friday, leaving out the defending champs from the four.",
      url: "https://www.on3.com//news/matt-leinart-predicts-college-football-playoff-teams-cfp-national-champions/",
      urlToImage:
        "https://on3static.com/uploads/dev/assets/cms/2023/09/01195814/USATSI_19547085.jpg",
      publishedAt: "2023-09-02T01:40:00Z",
      content:
        "The Fox Big Noon Kickoff crew got in on the all-important college football prediction ahead of the season, naming their College Football Playoff fields for the 2023 season. AnalystMatt Leinart didnt … [+2628 chars]",
    },
    {
      source: {
        id: null,
        name: "NBC Chicago",
      },
      author: "James Neveau",
      title:
        "Here are which symptoms to watch for as new COVID variants circulate - NBC Chicago",
      description:
        "As EG.5, the predominant coronavirus strain spreads across the country, public health officials have voiced concerns about another new variant, BA.2.86, which…",
      url: "https://www.nbcchicago.com/news/coronavirus/covid-variant-ba-2-86-symptoms/3219817/",
      urlToImage:
        "https://media.nbcchicago.com/2021/08/covid-generic.jpg?quality=85&strip=all&resize=1200%2C675",
      publishedAt: "2023-09-02T01:04:23Z",
      content:
        'As EG.5, the predominant coronavirus strain spreads across the country, public health officials have voiced concerns about another new variant, BA.2.86, which has been nicknamed "Pirola." \r\nA newly d… [+3499 chars]',
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Biden to visit communities hit by Hurricane Idalia in Florida - NBC News",
      description:
        "President Biden is set to visit Florida tomorrow to visit areas damaged by Hurricane Idalia. FEMA is warning it’s down to $3.4 billion in disaster relief fun...",
      url: "https://www.youtube.com/watch?v=N0A523Do_n0",
      urlToImage: "https://i.ytimg.com/vi/N0A523Do_n0/maxresdefault.jpg",
      publishedAt: "2023-09-02T00:00:18Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Gabon coup: Military chief says suspension of democracy only 'temporary' - BBC",
      description:
        "Gabon's main opposition says the military shows no sign they plan to hand power back to civilians.",
      url: "https://www.bbc.com/news/world-africa-66691766",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/D1F0/production/_130944735_mediaitem130944732.jpg",
      publishedAt: "2023-09-01T23:51:12Z",
      content:
        "Gabon's new military leader has pledged to return the country to democracy, but has refused to provide a timelines for fresh elections. \r\nGen Brice Oligui Nguema said the country's state institutions… [+2208 chars]",
    },
    {
      source: {
        id: null,
        name: null,
      },
      author: null,
      title: null,
      description: null,
      url: null,
      urlToImage: null,
      publishedAt: null,
      content: null,
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Ruby Franke: '8 Passengers' parenting mum arrested on child abuse suspicion - BBC",
      description:
        "The Utah vlogger's malnourished son escaped to her neighbour's home to seek help, police say.",
      url: "https://www.bbc.com/news/world-us-canada-66651506",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/E50C/production/_130963685_rubyfranke.jpg",
      publishedAt: "2023-09-01T23:04:33Z",
      content:
        "A Utah woman who ran a popular parenting advice YouTube channel is facing child abuse charges after her malnourished son escaped from home, officials said.\r\nRuby Franke and her business partner Jodi … [+3544 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Jessica Guynn",
      title:
        "Walgreens CEO resignation leaves S&P 500 with no Black women CEOs - USA TODAY",
      description:
        "Walgreens Boots Alliance said Friday that its top executive, Rosalind Brewer, had resigned, leaving the S&P 500 without a single Black woman CEO.",
      url: "https://www.usatoday.com/story/money/2023/09/01/walgreens-ceo-exit-no-black-women-ceos/70743102007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/presto/2023/09/01/USAT/556e4b3c-3fe5-42b5-b5bc-600a683bde4d-XXX_Brewer_111.JPG?crop=5759,3240,x0,y1728&width=3200&height=1801&format=pjpg&auto=webp",
      publishedAt: "2023-09-01T22:59:30Z",
      content:
        "And then there were none.\r\nWalgreens Boots Alliance said Friday that its CEO, Rosalind Brewer, had stepped down. \r\nBrewer, 61, was the only Black female CEO currently running an S&amp;P 500 company.\r… [+1699 chars]",
    },
  ];

  constructor(props) {
    super(props);
    console.log("\n i am a constructor ,from news component ");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResult: 0,
    };
    document.title = `${this.props.category} - News Monkey`;
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apikey=f9755094e03240f6955a90548e0d813d&page=1$pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pastdata = await data.json();
    console.log(pastdata);
    this.setState({
      articles: this.state.articles.concat(pastdata.articles),
      totalResult: pastdata.totalResult,
      loading: false,
    });
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apikey=f9755094e03240f6955a90548e0d813d&page=1$pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pastdata = await data.json();
    console.log(pastdata);
    this.setState({
      articles: pastdata.articles,
      totalResult: pastdata.totalResult,
      loading: false,
    });
  }
  handlenextclick = async () => {
    console.log("\n you have  clicke the next button ");
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResult / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=business&category=${
        this.props.category
      }&apikey=f9755094e03240f6955a90548e0d813d&page=${
        this.state.page + 1
      } &pageSize=${this.props.pageSize}`;

      this.setState({ loading: true });

      let data = await fetch(url);

      let pastdata = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: pastdata.articles,
        loading: false,
      });
    }
  };
  handleprevious = async () => {
    console.log("\n  you have clciked the prious button ");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=business&category=${
      this.props.category
    }&apikey=f9755094e03240f6955a90548e0d813d&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let pastdata = await data.json();
    console.log(pastdata);

    this.setState({
      page: this.state.page - 1,
      articles: pastdata.articles,
      loading: false,
    });
  };

  render() {
    console.log("render");
    return (
      <div className="container my-4">
        <h1>News Monkey Top {this.props.category} Headlines </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageurl={element.urlToImage}
                      newurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
