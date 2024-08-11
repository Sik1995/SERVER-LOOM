
AddEventHandler('onClientResourceStart', function(resName)
	if (GetCurrentResourceName() == resName) then
    Wait(500)
    SendNUIMessage({displayWindow = 'true'})
	end
end)
