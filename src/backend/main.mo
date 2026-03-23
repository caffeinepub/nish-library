import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  type Announcement = {
    title : Text;
    description : Text;
    date : Text;
  };

  module Announcement {
    public func compare(announcement1 : Announcement, announcement2 : Announcement) : Order.Order {
      Text.compare(announcement1.date, announcement2.date);
    };
  };

  type LibraryResource = {
    name : Text;
    description : Text;
    url : Text;
    category : Text;
  };

  module LibraryResource {
    public func compare(resource1 : LibraryResource, resource2 : LibraryResource) : Order.Order {
      switch (Text.compare(resource1.category, resource2.category)) {
        case (#equal) { Text.compare(resource1.name, resource2.name) };
        case (order) { order };
      };
    };
  };

  type LibraryInfo = {
    name : Text;
    address : Text;
    contact : Text;
    hours : Text;
  };

  let announcements = Map.empty<Text, Announcement>();
  var libraryResources : [LibraryResource] = [];
  var libraryInfo : ?LibraryInfo = null;

  public query ({ caller }) func getAnnouncements() : async [Announcement] {
    announcements.values().toArray().sort();
  };

  public shared ({ caller }) func addAnnouncement(title : Text, description : Text, date : Text) : async () {
    let announcement : Announcement = {
      title;
      description;
      date;
    };
    // let id = Text.toVarArray(title).concat(Text.toVarArray(date)).toText();
    if (announcements.containsKey(title)) {
      Runtime.trap("Announcement already exists");
    };
    announcements.add(title, announcement);
  };

  public query ({ caller }) func getLibraryResources() : async [LibraryResource] {
    libraryResources.sort();
  };

  public shared ({ caller }) func setLibraryResources(_resources : [LibraryResource]) : async () {
    libraryResources := _resources;
  };

  public query ({ caller }) func getLibraryInfo() : async LibraryInfo {
    switch (libraryInfo) {
      case (null) { Runtime.trap("Library info not set") };
      case (?info) { info };
    };
  };

  public shared ({ caller }) func setLibraryInfo(info : LibraryInfo) : async () {
    libraryInfo := ?info;
  };
};
