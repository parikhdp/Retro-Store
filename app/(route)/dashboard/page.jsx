import UserListing from "@/app/(route)/dashboard/_components/UserListing"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Dashboard() {
    return (
        <div className='mt-16'>
            <h2 className='font-bold text-2xl'>Dashboard</h2>
            <Tabs defaultValue="listing" className="mt-5">
                <TabsList>
                    <TabsTrigger value="listing">Listing</TabsTrigger>
                    <TabsTrigger value="purchase">Purchase</TabsTrigger>
                </TabsList>
                <TabsContent value="listing">
                    <UserListing/>
                </TabsContent>
                <TabsContent value="purchase">Change your password here.</TabsContent>
            </Tabs>
        </div>
    )
}

export default Dashboard
