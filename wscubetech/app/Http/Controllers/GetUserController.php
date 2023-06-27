<?php

namespace App\Http\Controllers;

use App\Models\Broker;
use App\Models\BrokerFinancial;
use App\Models\User;
use Illuminate\Http\Request;

class GetUserController extends Controller
{
    public function getAllUsersWithData()
    {
        $users = User::with('broker', 'brokerfinancial', 'clientuser', 'clientbroker')->get();

        return response()->json($users);
    }

    public function getAllUsersWithBroker()
    {

        $usersWithNormalBroker = User::with('broker')->whereHas('broker')->get();
        $usersWithFinancialBroker = User::with('brokerfinancial')->whereHas('brokerfinancial')->get();

        $combinedData = $usersWithNormalBroker->merge($usersWithFinancialBroker);
        return response()->json($combinedData);
    }

    public function getAllUsersWithBrokerFinancial()
    {
        $users = User::with('brokerfinancial')->whereHas('brokerfinancial')->get();

        return response()->json($users);
    }

    public function getAllUsersWithBrokerN()
    {
        $users = User::with('broker')->whereHas('broker')->get();

        return response()->json($users);
    }

    public function getAllUsersWithClient()
    {
        $usersWithDirectClient = User::with('clientuser')->whereHas('clientuser')->get();
        $usersWithBrokerClient = User::with('clientbroker')->whereHas('clientbroker')->get();

        $combinedData = $usersWithDirectClient->merge($usersWithBrokerClient);
        return response()->json($combinedData);
    }

    public function getAllUsersWithDirectClient()
    {
        $users = User::with('clientuser')->whereHas('clientuser')->get();

        return response()->json($users);
    }

    public function getAllUsersWithBrokerClient()
    {
        $users = User::with('clientbroker')->whereHas('clientbroker')->get();

        return response()->json($users);
    }

    public function getBrokerClients(Request $request, $id)
    {
        $broker = Broker::findOrFail($id);

        $clients = $broker->clients()->with('user')->get();

        return response()->json($clients);
    }
    public function getBrokerFinancialClients(Request $request, $brokerfinancial_id)
    {
        $broker = BrokerFinancial::findOrFail($brokerfinancial_id);

        $clients = $broker->clients()->with('user')->get();

        return response()->json($clients);
    }
}
