import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "One fitness assessment",
            "Access to cardio and weight training areas",
            "Free Wi-Fi",
            "One complimentary bottled water per visit"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group classes",
            "One personal training session per month",
            "Free guest pass once per month",
            "Access to cardio, weight training, and stretching areas",
            "Access to wellness workshops",
            "Discounted entry to special events",
            "Complimentary smoothie sample once per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 79.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group classes",
            "Weekly personal training session",
            "24/7 gym access",
            "Access to sauna and steam room",
            "Free guest pass twice per month",
            "Unlimited use of cardio, weight, and functional training areas",
            "Access to wellness and nutrition consultations",
            "Monthly health and body analysis",
            "Access to specialty classes (e.g., yoga, HIIT)"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 99.99,
          "features": [
            "All Premium features",
            "Daily personal training session",
            "Priority booking for classes",
            "Private locker with laundry service",
            "Exclusive access to VIP lounge",
            "Complimentary smoothie and snack bar access",
            "Access to VIP-only group classes",
            "Dedicated nutrition and diet plan",
            "Monthly massage therapy session",
            "Complimentary sports apparel rental",
            "VIP parking spot",
            "Access to exclusive workshops and events"
          ]
        }
      ]
      
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town

                <div className="grid md:grid-cols-3 gap-6">
                    {
                        priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                    }
                </div>
            </h2>
        </div>
    );
};

export default PriceOptions;