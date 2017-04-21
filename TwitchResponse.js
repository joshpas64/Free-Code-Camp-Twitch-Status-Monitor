$(document).ready(function() {
  var languageCode = {
    "en": "English",
    "fr": "French",
    "dan": "Danish",
    "deu": "Deustch",
    "ger": "German",
    "fin": "Finnish",
    "ita": "Italian",
    "de": "Deutsch",
    "da": "Danish"
  };
  var regularChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var closedChannels = [
    "brunofin", "comster404"
  ];
  var new_base = "https://wind-bow.glitch.me/twitch-api/channels/";
  var stream_base = "https://wind-bow.glitch.me/twitch-api/streams/";
  var user_base = "https://wind-bow.glitch.me/twitch-api/users/";
  $(".nav-pills li").click(function(e) {
    $(".nav-pills li").removeClass("active");
    $(this).addClass("active");
    $(".tpanel").css("display", "none");
    url = $(this).children().attr("href");
    $(url).css("display", "block");
  });
  var channelList = [];
  var onlineStreamers = [];
  var offlineStreamers = [];
  var resultJSON;
  var loadStreams = function() {
    var profile_base;
    $(".streams").html("");
    for (var i = 0; i < regularChannels.length; i++) {
      profile_base = stream_base;
      profile_base += regularChannels[i];
      var currentChannel = regularChannels[i];
      $.ajax({
        url: profile_base,
        success: function(response, status) {
          if (response.stream !== null) {
            if (onlineStreamers.indexOf(response.stream.channel.display_name) === -1)
              onlineStreamers.push(response.stream.channel.display_name);
            $(".streams").append("<li class='channel-card stream-card'><div class='row'><div class='col-xs-6'><a href='" + response.stream.channel.url + "' target='_blank' title='Click here to check out the stream!'><h5 class='text-primary text-info'>" + response.stream.channel.display_name + "</h5></a>" + "<img src='" + response.stream.preview.small + "' class='img-responsive img-thumbnail' alt='No preview thumbnail available'><br>" + response.stream.channel.display_name + "says: <em>" + response.stream.channel.status + "</em><br><b>Streaming since:</b> " + response.stream.created_at + "<br><b>Content: </b>" + response.stream.game + "</div><div class='col-xs-2'><h6 class='text-info'>Stream Numbers</h6>" + "<ul class='list-unstyled'><li><b>Currently Watched by:</b> " + response.stream.viewers + "</li><li><b>Current FPS: </b>" + response.stream.average_fps + "</li></ul></div></div></li>");
          } else {
            if (offlineStreamers.indexOf(currentChannel) === -1) {
              offlineStreamers.push(currentChannel);
            }
          }
        }
      });
    }
  };
  var jsonRetrieve = function(url) {
    var new_url = url;
    $(".testJson").html("");
    for (var i = 0; i < regularChannels.length; i++) {
      new_url = new_base + regularChannels[i];
      var bio = "";
      var defaultGame = "Not Streaming or No Featured Game for Channel Set";
      var user_search = user_base + regularChannels[i];
      $.ajax({
        url: user_search,
        success: function(response, status) {
          if (response.bio !== null)
            bio = "<p><strong>Channel Bio: </strong>" + response.bio + "</p>";
        }
      });
      $.ajax({
        url: new_url,
        success: function(data, status) {
          var featuredStatus = data.status;
          var availability = "<b>Currently Offline</b>: ";
          var isOffline = true;
          if (data.status === 404) {
            featuredStatus = "I'm sorry but it seems that the " + data.message;
            $(".testJson").append("<li class='channel-card'><div class='row'><div class='col-xs-6'><h5 class='text-info'>" + data.message + "</h5><img src='' class='img-responsive img-thumbnail' alt='No logo picture available'></div></div><div class='row'><div class='col-xs-9'><small><b>Current Status</b>" + featuredStatus + "</small></div></div></li>");
          } else {
            if (onlineStreamers.indexOf(data.display_name) !== -1) {
              availability = "<b>Currently Online</b>: ";
              isOffline = false;
            }
            if (data.game !== null)
              defaultGame = data.game;
            $(".testJson").append("<li class='channel-card'><div class='row'><div class='col-xs-6'><h5 class='text-info'><a title='Click to go to Twitch Channel' target='_blank' href='" + data.url + "'>" + data.display_name + "</a></h5><img src='" + data.logo + "' class='img-responsive img-thumbnail' alt='No logo picture available'><br>On Twitch since: " + data.created_at + "</div><div class='col-xs-2'><h6>Statistics</h6><ul class='list-unstyled'><li><b>Total Views: </b>" + data.views + "</li><li><b>Overall Followers:</b> " + data.followers + "</li></ul></div></div><div class='row'><div class='col-xs-9'><small><b>Current Status: </b>" + featuredStatus + "</small><br>" + availability + "<br><b>Recently Featured Game/Activity:</b> " + defaultGame + "</div></div></li>");
            if (isOffline) {
              var mature = "No";
              var partnered = "No";
              var language = data.language;
              if (data.language === null)
                language = "N/A";
              if (data.mature)
                mature = "Yes";
              if (data.partner)
                partnered = "Yes";
              $(".basic-info").append("<li class='channel-card offline-card'><div class='row'><div class='col-xs-6'><h5 class='text-primary text-info'><a title='Click to go to Twitch channel' target='_blank' href='" + data.url + "'>" + data.display_name + "</a></h5><img class='img-responsive img-thumbnail' alt='logo not availalle' src='" + data.logo + "'><br>" + bio + "<br>" + data.status + "<br><b>Mature Content?: </b>" + mature + "<br><b>Partnered Channel? :</b>" + partnered + "<br><b>BroadCasting Main Lang: </b>" + languageCode[language] + "</div><div class='col-xs-2'><h6 class='text-info'>Channel Info</h6><strong>Featured Game</strong>: " + defaultGame +
                "<br><b>Twitch Channel Since: " + data.created_at + "</div></div></li>");
            }
          }
        }
      });
    }
  }
  var loadTwitch = function() {
    loadStreams();
    jsonRetrieve(new_base);
  };
  $("button").click(function(e) {
    loadTwitch();
  });
});
