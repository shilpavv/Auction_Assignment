export interface listType {
  response: {
    allUpcomingAuctions: {
      id: string;
      title: string;
      name: string;
      itemCount: string;
      auctionStatus: string;
      auctioneer: string;
      start: string;
      featuredSellersCount: number;
      featuredSellers: any[];
    };
  };
}